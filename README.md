# josephhess.github.io
Professional portfolio for Joseph Hess, PhD, spanning computational science, scientific informatics, data science, and research technology.

## Local preview

Open `index.html` directly in a browser, or serve this directory with Python:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`. No build, package installation, or framework is required. There is no existing automated test or lint setup.

## Structure

- `index.html`: single-page portfolio with anchored navigation.
- `assets/css/styles.css`: responsive layout and capability color system.
- `assets/js/main.js`: progressively enhanced mobile navigation; all content and links remain available without JavaScript.
- `404.html`: GitHub Pages error page.
- `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`: static hosting and discoverability.
- `assets/images/` and `assets/documents/`: future verified assets.

## Publish on GitHub Pages

1. In repository **Settings → Pages**, choose **Deploy from a branch**, select the intended publishing branch, and select **/ (root)**.
2. The `CNAME` file specifies `josephhess.dev`. Configure the domain’s DNS using [GitHub’s custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Verify domain ownership in GitHub settings and enable **Enforce HTTPS** after the certificate is available.
3. Confirm the custom domain resolves and test navigation and a missing URL. Repository naming alone does not configure hosting or DNS.

Normal site assets and internal links use relative paths and support local-file browsing. The error page deliberately uses root-relative stylesheet and home links so nested missing URLs work on the GitHub Pages root/custom domain. To preview that page locally, use the HTTP server rather than a `file://` URL.

## Content to complete

The supplied brief ends at “Research Data Management — Metadata.” The site includes all supplied foundation and capability details; further engineering details are explicitly pending. Selected Work lists representative application areas, **not claims of completed projects**. No dates, metrics, publications, technology stack, or additional employment history have been inferred.

- Replace the noninteractive GitHub, LinkedIn, ORCID, and email placeholders in both the hero and Contact section with verified links. Use a `mailto:` link only after the actual email address is supplied.
- Add `assets/documents/joseph-hess-cv.pdf`. Only then replace the disabled “CV coming soon” button with a “View CV” anchor to that relative path. The nearby HTML comment identifies this publishing requirement; the current site makes no request to a missing PDF.
- Replace pending engineering detail and case-study notices with approved content and working artifact links.
- Add publication citations only after verification.
- Update the canonical URL, sitemap, robots sitemap URL, and `CNAME` together if the domain changes.

## Manual checks

- Check desktop and narrow mobile widths, keyboard focus, skip link, and all navigation anchors.
- On mobile, verify menu open/close, Escape returning focus, and navigation after resizing. Disable JavaScript and confirm navigation remains available.
- Enable reduced motion and verify anchor scrolling is not animated.
- Confirm unavailable CV/profile placeholders do not navigate to broken URLs.
- Confirm all local assets load, and preview `404.html` via HTTP.

The site uses system fonts and makes no third-party script, font, analytics, tracking, or form-service requests.
