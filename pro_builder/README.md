# InstaSite Builder – Pro

A full‑featured React site builder with drag‑and‑drop blocks, template marketplace, and SEO controls (stubs). Extend as needed.

## Quick Start
```bash
npm install
npm run dev
```

## Key Libraries
- **react‑dnd** for drag & drop
- **Tailwind CSS** for styling

## Online Demo
Deploy free in minutes:

1. Push to GitHub → `pro_builder` repository.
2. Go to <https://vercel.com> or <https://netlify.com>, import the repo.
3. Accept default build settings.

## Extending
- Add new blocks in `src/components/blocks`.
- Connect a backend or local storage to save/load projects.
- Implement ZIP export by serializing blocks into HTML and packaging with `JSZip`.
