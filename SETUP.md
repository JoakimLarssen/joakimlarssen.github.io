# joakimlarssen.github.io: deploy + finish steps

A self-contained static site. No build step, no framework, no dependencies
except the Google Fonts link in `index.html`. Just push and enable Pages.

## Files in this folder

| File          | Purpose                                                        |
| ------------- | ------------------------------------------------------------- |
| `index.html`  | The page. Semantic HTML, all content lives here.              |
| `styles.css`  | Phosphor Field palette, JetBrains Mono, terminal layout.      |
| `main.js`     | Reduced-motion guard for the single hero cursor.              |
| `.nojekyll`   | Empty. Tells GitHub Pages to skip Jekyll and serve verbatim.  |
| `SETUP.md`    | This file. Not served as part of the site.                    |

## Deploy (GitHub Pages, deploy from a branch)

1. Create a repository named **exactly** `joakimlarssen.github.io`
   (the user/org page repo; the name has to match the username).
2. Put `index.html`, `styles.css`, `main.js`, and `.nojekyll` in the repo root.

   ```bash
   git init
   git add index.html styles.css main.js .nojekyll
   git commit -m "site"
   git branch -M main
   git remote add origin git@github.com:JoakimLarssen/joakimlarssen.github.io.git
   git push -u origin main
   ```

   (`SETUP.md` is optional to commit; it is documentation, not part of the site.)
3. On GitHub: **Settings -> Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**, then **Save**.
4. Wait a minute or two. The site is live at:
   **https://joakimlarssen.github.io**

To update later: edit the files, commit, push to `main`. Pages redeploys
automatically.

## Remaining [PLACEHOLDER] items to fill

These are intentionally inert placeholders (rendered as dimmed, non-interactive
text, no dead links). Replace them when the real values exist.

1. **Thesis link**, in `index.html`, the WORK section, bachelor thesis row:
   ```html
   <span class="row__link is-placeholder">[ thesis link pending ]</span>
   ```
   When the thesis is published, swap this span for a real link, for example:
   ```html
   <a class="row__link" href="https://REAL-THESIS-URL" rel="noopener" target="_blank">thesis (pdf)</a>
   ```

2. **First writeup**, in `index.html`, the WRITING section:
   ```html
   <span class="log__title is-placeholder">[ first writeup pending ]</span>
   ```
   When the first writeup exists, replace it with the real title and (optionally)
   wrap it in an `<a>` the same way as the thesis link above. Update the
   `datetime`/year on the `<time class="log__date">` if it differs from 2026.

Nothing else is a placeholder. Email, GitHub, LinkedIn, and the Riposte and
Futtia links are all live, final values.

## Design constraints (do not break these when editing)

- Palette is fixed ("Phosphor Field"). Single teal accent `#5ED3C4`, used flat,
  never as a gradient. `--alert` red is status-only.
- JetBrains Mono only. `border-radius: 0` everywhere.
- One blinking cursor (the hero), and it must stop under
  `prefers-reduced-motion`. No scanlines, glow, boot sequence, typewriter, or
  matrix effects. No badges, stat cards, or view counters.
- Understated copy, present tense, no AI buzzwords, no em dashes.
- Riposte and Futtia are both **in dev**: do not change either chip to imply
  they are finished or shipping.
- Location: based in **Oslo**. Bergen appears only as where Helt Sikker (the
  Kristiania student security org) is based.
