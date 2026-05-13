# SMALLCOX — $COX

Solana memecoin landing page. The only virus that pumps.

Static site, no build step.

## Layout
- `site/` — deployed static site (HTML/CSS/JS + processed assets)
- `logo.png`, `vid.mp4`, `ref.jpeg` — source assets (originals)

## Local preview
```
python3 -m http.server 5173 --directory site
```

## Deploy
```
cd site && vercel --prod
```
