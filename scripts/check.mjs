#!/usr/bin/env node
/*
 * Checks the three sites in this repository before a push: node scripts/check.mjs
 * Node built-ins only. With --online it also requests every external link.
 *
 * Each site is one page, so the checks are about the things that silently
 * break a profile page in search: the canonical and og:url name the site's own
 * host, the sitemap and robots.txt agree with it, the structured data parses
 * and describes the same person on all three, every local file a page uses
 * exists, titles and descriptions differ from site to site, and nothing but
 * JSON-LD sits in a <script> (the root 404.html's legacy redirect excepted).
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PERSON_ID = 'https://tanshuai.com/about#person';
const SITES = [
  { name: 'github.io', dir: '.', host: 'https://tanshuai.github.io', lang: 'en' },
  { name: 'vercel', dir: 'sites/vercel', host: 'https://tanshuai.vercel.app', lang: 'en' },
  { name: 'netlify', dir: 'sites/netlify', host: 'https://tanshuai.netlify.app', lang: 'zh-Hans' },
];
/** The one script that is not JSON-LD: old deep links on github.io go to tanshuai.com. */
const SCRIPT_ALLOWED = new Set(['./404.html']);

const failures = [];
let checks = 0;
const check = (ok, message) => {
  checks += 1;
  if (!ok) failures.push(message);
};
const read = (path) => readFileSync(join(ROOT, path), 'utf8');
const attr = (html, pattern) => html.match(pattern)?.[1];

const persons = [];
const titles = new Map();
const descriptions = new Map();
const external = new Set();

for (const site of SITES) {
  const page = `${site.dir}/index.html`;
  const html = read(page);
  const canonical = `${site.host}/`;

  check(attr(html, /<html lang="([^"]+)"/) === site.lang, `${page}: <html lang> is not ${site.lang}`);
  check(attr(html, /<link rel="canonical" href="([^"]+)"/) === canonical, `${page}: canonical is not ${canonical}`);
  check(attr(html, /<meta property="og:url" content="([^"]+)"/) === canonical, `${page}: og:url is not ${canonical}`);
  check(
    attr(html, /<meta property="og:image" content="([^"]+)"/) === `${site.host}/avatar.png`,
    `${page}: og:image is not this host's avatar.png`,
  );
  check((html.match(/<h1[\s>]/g) ?? []).length === 1, `${page}: needs exactly one <h1>`);

  const title = attr(html, /<title>([^<]+)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]+)"/);
  check(Boolean(title) && !titles.has(title), `${page}: title missing or used by another site`);
  check(Boolean(description) && !descriptions.has(description), `${page}: description missing or used by another site`);
  titles.set(title, page);
  descriptions.set(description, page);

  const scripts = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
  for (const [, attrs, body] of scripts) {
    check(attrs.trim() === 'type="application/ld+json"', `${page}: a <script> that is not JSON-LD`);
    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      check(false, `${page}: JSON-LD does not parse (${error.message})`);
      continue;
    }
    check(data['@type'] === 'ProfilePage', `${page}: JSON-LD is not a ProfilePage`);
    check(data.url === canonical && data['@id'] === canonical, `${page}: ProfilePage url / @id is not ${canonical}`);
    check(data.inLanguage === site.lang, `${page}: ProfilePage inLanguage is not ${site.lang}`);
    check(data.mainEntity?.['@id'] === PERSON_ID, `${page}: mainEntity @id is not ${PERSON_ID}`);
    check(data.mainEntity?.sameAs?.includes(canonical), `${page}: Person sameAs does not list ${canonical}`);
    persons.push({ page, person: JSON.stringify(data.mainEntity) });
  }
  check(scripts.length === 1, `${page}: expected one JSON-LD block, found ${scripts.length}`);

  // Every root-relative href / src is a file in this site's folder.
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const file = url === '/' ? 'index.html' : url.slice(1);
    check(existsSync(join(ROOT, site.dir, file)), `${page}: ${url} has no file in ${site.dir}`);
  }
  for (const [, url] of html.matchAll(/(?:href|src)="(https:\/\/[^"]+)"/g)) external.add(url);

  check(read(`${site.dir}/robots.txt`).includes(`Sitemap: ${site.host}/sitemap.xml`), `${site.dir}/robots.txt: wrong Sitemap line`);
  const locs = [...read(`${site.dir}/sitemap.xml`).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check(locs.length === 1 && locs[0] === canonical, `${site.dir}/sitemap.xml: should list exactly ${canonical}`);

  for (const extra of ['404.html']) {
    const path = `${site.dir}/${extra}`;
    if (!existsSync(join(ROOT, path))) continue;
    const other = read(path);
    const hasScript = /<script/.test(other);
    check(!hasScript || SCRIPT_ALLOWED.has(path), `${path}: has a <script>`);
  }
}

// One person, one set of facts, on every site.
check(new Set(persons.map((p) => p.person)).size === 1, 'the Person node differs between sites: edit all three together');

// The hosts publish what this repository says they publish.
const vercel = JSON.parse(read('vercel.json'));
check(vercel.outputDirectory === 'sites/vercel', 'vercel.json: outputDirectory is not sites/vercel');
check(/^\s*publish = "sites\/netlify"$/m.test(read('netlify.toml')), 'netlify.toml: publish is not sites/netlify');
const jekyll = read('_config.yml');
for (const name of ['sites', 'scripts', 'README.md', 'CLAUDE.md', 'vercel.json', 'netlify.toml']) {
  check(new RegExp(`^\\s*- ${name.replace('.', '\\.')}$`, 'm').test(jekyll), `_config.yml: ${name} is not excluded`);
}
check(!existsSync(join(ROOT, '.nojekyll')), '.nojekyll would publish sites/ on github.io as well');

// Files the Vercel redirect must not send to tanshuai.com.
const source = vercel.redirects?.[0]?.source ?? '';
for (const site of SITES.filter((s) => s.name === 'vercel')) {
  for (const file of ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'avatar.png', 'avatar-384.webp', 'seal.svg', 'robots.txt', 'sitemap.xml']) {
    check(existsSync(join(ROOT, site.dir, file)), `${site.dir}/${file} is missing`);
    check(source.includes(file.replace(/\./g, '\\.')), `vercel.json: the redirect would send /${file} to tanshuai.com`);
  }
}

if (process.argv.includes('--online')) {
  for (const url of [...external].sort()) {
    let status;
    try {
      const response = await fetch(url, { method: 'GET', redirect: 'manual', signal: AbortSignal.timeout(20000) });
      status = response.status;
    } catch (error) {
      status = error.name;
    }
    // LinkedIn answers robots with 999, X with 403 and some sites with a redirect; only report.
    const ok = typeof status === 'number' && status < 400;
    console.log(`${ok ? 'ok  ' : 'warn'} ${status} ${url}`);
  }
}

if (failures.length) {
  console.error(`${failures.length} of ${checks} checks failed:`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log(`OK: ${checks} checks on ${SITES.length} sites.`);
