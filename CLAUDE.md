# CLAUDE.md

Notes for AI agents working on this repository. `README.md` says what the three sites are; this file is the rules that are
easy to break.

1. **Three sites, three jobs.**
   - **tanshuai.github.io** is the English engineering notebook.
   - **tanshuai.vercel.app** is the English page of official links and verification.
   - **tanshuai.netlify.app** is the Simplified Chinese profile.
   - Never make one a copy of another or of tanshuai.com. Never paste post text from tanshuai.com: the note summaries are
     written fresh and link to the full post.
2. **Facts come from tanshuai.com.**
   - Use only what its about, work, press and official pages state, plus primary sources such as the patent office.
   - Never state more than tanshuai.com does: no birth date, nationality, address or family.
   - The JSON-LD `Person` node is identical on all three pages, and its `@id` stays `https://tanshuai.com/about#person`.
3. **No JavaScript** except `application/ld+json`. The root `404.html` redirect is the one exception: it sends old deep
   links from the 2024 copy to tanshuai.com.
4. **The hosts:**
   - **GitHub Pages** builds the root with Jekyll. `_config.yml` keeps `sites/` and the config files off github.io.
     Never add `.nojekyll`.
   - **Vercel** serves `sites/vercel/` through `vercel.json`. Unknown paths get a 301 to tanshuai.com; the exclusions in
     that redirect must name every file in the folder.
   - **Netlify** serves `sites/netlify/` through `netlify.toml`.
   - No build steps, no dependencies, no `package.json`: Vercel and Netlify would start installing and building.
5. **Never delete or repoint tanshuai.com's own Vercel project**, the one with the `tanshuai.com` domain. It is
   tanshuai.com's DNS rollback target (tanshuai.com `docs/DEPLOY.md` §10.2). This repository gets its own Vercel project.
6. **Before committing:** run `node scripts/check.mjs`; `--online` also requests every external link.
