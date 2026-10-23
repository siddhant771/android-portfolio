# Siddhant Pathak — Android Developer Portfolio

A recruiter-focused, responsive Next.js + Tailwind CSS static portfolio. All current projects are free to view. No backend, checkout or payment system.

## Your 3 main editing files

**`content/site.json`** — Edit your name, intro, About section, GitHub, LinkedIn, X, Instagram, YouTube and LifeQuest repository link. Leave a social URL empty to hide it.

**`content/projects.json`** — Five project entries. The first is PaisaPulse Ledger. For projects 2–5, change `title`, `github`, and `screenshots`. Other fields are optional. For example:

```json
{
  "id": "project-2",
  "title": "My Android Project",
  "type": "ANDROID PROJECT",
  "description": "",
  "technologies": [],
  "github": "https://github.com/siddhant771/my-project",
  "playStore": "",
  "screenshots": ["/projects/project-2/screen-1.png"]
}
```

**`public/projects/project-2/`** (or project-3, -4, -5) — Upload screenshot images into the corresponding folder using GitHub's **Add file → Upload files**. Then add those exact image paths to `content/projects.json`. For example `public/projects/project-2/screen-1.png` becomes `/projects/project-2/screen-1.png` in JSON. If there are no screenshots, the website shows a tasteful placeholder.

The PaisaPulse screenshots are cropped from the exact Play Store screenshot you supplied, without redesigning the app. Replace them with original full-resolution captures later for sharper visuals.

**`public/resume/Siddhant-Pathak.pdf`** — Replace this PDF with your updated resume (keep the filename).

## Publish to GitHub without writing code

1. Create public repository `siddhant771/android-portfolio`.
2. Extract this ZIP. Upload **contents of the folder** (not the ZIP itself) to your repo. GitHub's web uploader may be awkward for nested directories; GitHub Desktop is an easy no-code alternative.
3. Commit the changes.
4. On Cloudflare, go to Workers & Pages → Create Pages project → Connect GitHub repository.
5. Select `android-portfolio`. Build command: `npm run build`. Build output directory: `out`. No environment variables are required.
6. Deploy. You'll get a free `*.pages.dev` URL.
7. After the site is live, request a free `*.is-a.dev` subdomain at https://docs.is-a.dev/quickstart/ and follow their Cloudflare Pages guide. Approval and availability are not guaranteed.

## Updating projects later

Open `content/projects.json` on GitHub → pencil icon → edit text/links → Commit. For screenshots, upload them into `public/projects/project-N/` and add their paths. Cloudflare Pages automatically redeploys from the main branch.

**Note:** GitHub editing is no-code in the sense that you only edit simple data fields and upload files. The JSON syntax must remain valid (quotes, commas, brackets). There is no admin dashboard.

## Optional local run

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To test production output: `npm run build`.

## Costs

The static site can be hosted within Cloudflare Pages' free tier, subject to limits. `is-a.dev` subdomains are free subject to rules and approval. This does not provide ownership of `siddhant.dev`. If you later monetize the website, re-check your hosting and subdomain terms.

## 2026 portfolio update

Projects: PaisaPulse Ledger, DevPulse AI, StudyMate AI, PostExplorer, and WhatsappMEGA. All five project GitHub links point to the earlier `SETHROLLINSISMYGOAT` account. LifeQuest is a separate in-development project on `siddhant771`.

**Screenshots pending:** The updated downloadable ZIP contains the four newly supplied PaisaPulse JPG screenshots and three extracted DevPulse JPG video frames. The GitHub-hosted website currently uses its four existing PaisaPulse PNGs and a DevPulse placeholder until those seven new JPEG assets are uploaded into `public/projects/paisapulse/` and `public/projects/devpulse/`. Then update the `screenshots` paths in `content/projects.json` to the `.jpg` paths found in the ZIP.

The Get in touch button is deliberately displayed as disabled, as requested.
