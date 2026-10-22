# tanshuai.github.io

Three small official pages for Tan Shuai, all served from this one repository. Each has its own job, so none of them is a
copy of tanshuai.com or of another:

| Site | Folder | What it is | Host |
|---|---|---|---|
| https://tanshuai.github.io | `/` (root) | Engineering notebook, in English: the stack, an index of the technical notes with a summary of each, selected silicon, patents and roles | GitHub Pages |
| https://tanshuai.vercel.app | `sites/vercel/` | Official links and contact, in English: every account, how to tell it is really me, and quick facts for anyone introducing me | Vercel |
| https://tanshuai.netlify.app | `sites/netlify/` | Profile in Simplified Chinese (中文简介): 简介、经历、代表芯片、专利、文章、官方账号、谨防冒充 | Netlify |

What all three share:

- each is one static HTML page, with no build step and no dependencies;
- no JavaScript, apart from the root `404.html`, which sends old deep links from the 2024 copy of tanshuai.com that used
  to live here to the same path on tanshuai.com;
- a canonical URL on its own host, plus a `sitemap.xml` and `robots.txt`;
- the same `ProfilePage` structured data. Its `Person` has the `@id` that tanshuai.com uses
  (`https://tanshuai.com/about#person`), so search engines read all of them as one person.

## How each host builds

- **GitHub Pages** publishes `main` from the root with Jekyll.
  - Every HTML file has no front matter, so Jekyll copies it unchanged.
  - `_config.yml` keeps `sites/`, `scripts/` and the config files off tanshuai.github.io.
  - Never add a `.nojekyll` file: it would publish `sites/` here a second time.
- **Vercel** reads `vercel.json` and serves `sites/vercel/`.
  - Every other path gets a 301 to the same path on tanshuai.com. That catches the URLs of the 2024 copy of the site
    that tanshuai.vercel.app used to serve.
  - The redirect lists the files it must not touch. A new file in `sites/vercel/` needs adding there, and
    `node scripts/check.mjs` fails until it is.
- **Netlify** reads `netlify.toml` and serves `sites/netlify/`.

A push to `main` redeploys all three.

## Changing a page

- **Where facts come from:** tanshuai.com's about, work, press and official pages. Patent dates are from Google Patents.
- **When a fact changes there:** change it on all three pages, including the JSON-LD. The `Person` node must stay
  identical on all three.
- **Before pushing:** run `node scripts/check.mjs`. With `--online` it also requests every external link.

## Setting up the hosts (owner, once)

- **GitHub Pages:** already on (Settings → Pages: deploy from the `main` branch, root).
- **Vercel**, for tanshuai.vercel.app:
  - The name is still held by an old Vercel project that serves the 2024 copy of tanshuai.com.
  - Keep that project. If it is the one with the `tanshuai.com` domain, it is tanshuai.com's DNS rollback target
    (tanshuai.com `docs/DEPLOY.md` §10.2).
  - Only remove the `tanshuai.vercel.app` domain from it (Project → Settings → Domains).
  - Then Add New → Project, import `tanshuai/tanshuai.github.io`, and deploy; `vercel.json` sets everything.
  - Finally, add `tanshuai.vercel.app` under the new project's Settings → Domains.
- **Netlify**, for tanshuai.netlify.app:
  - Add new site → Import an existing project → GitHub → `tanshuai/tanshuai.github.io`, then deploy; `netlify.toml`
    sets everything.
  - Then Site configuration → Change site name → `tanshuai`.

## History

Until 2026-09-06 this repository served a static copy of tanshuai.com. From then until 2026-10-22 it only forwarded to
tanshuai.com. The old files remain in the history.
