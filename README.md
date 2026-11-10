# hess80.github.io
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
2. The `CNAME` file specifies `hess.dev`. Configure the domain’s DNS using [GitHub’s custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Verify domain ownership in GitHub settings and enable **Enforce HTTPS** after the certificate is available.
3. Confirm the custom domain resolves and test navigation and a missing URL. Repository naming alone does not configure hosting or DNS.

Normal site assets and internal links use relative paths and support local-file browsing. The error page deliberately uses root-relative stylesheet and home links so nested missing URLs work on the GitHub Pages root/custom domain. To preview that page locally, use the HTTP server rather than a `file://` URL.

## Source verification and public disclosure

The current revision uses the complete three-page CV PDF attached to [PR #1](https://github.com/hess80/hess80.github.io/pull/1#issuecomment-6769677235) as the factual authority, and the complete knowledge graph supplied in the PR discussion as the structural authority. Neither source document is embedded in the public site.

Verified corrections and distinctions:

- Rutgers: **B.S. Chemistry, Math Minor, 2012–2015**, rather than an unspecified B.S. with a biochemical-engineering focus.
- Clemson: **PhD Computational Biophysical Chemistry, 2017–2023**. The degree is distinct from the **Data Scientist/Research/Teaching Assistant** appointment in the Department of Chemistry over the same period.
- Military service: **New Jersey Army National Guard, 2003–2011**, Chemical Operations Specialist/NBC NCO; **Operation Iraqi Freedom II, 2005–2007**.
- FDA: **Data Scientist/Researcher/ORISE Fellow, DARS, 2016–2017**, including pharmacophore/toxicophore screening, NLP, and (Q)SAR work. The graph also names a Center for Chemical Informatics; the CV identifies DARS, so no additional appointment is asserted.
- Current employment: **Data Scientist/Researcher, Chemical Insights/CTHH, ULRI, 2022–Present**, transcribed from the CV. The formal hero title remains **Data Scientist**; the scope line is not a new job title. Overlapping appointment dates are preserved, not silently reordered.
- Publication author lists, titles, journal details, dissertation, and presentation details are transcribed from the CV. No DOIs or publication URLs are inferred.

The graph supplies all three capability domains and their relationships: foundation → capabilities → representative project efforts → output pathways. Infrastructure now includes LRP, data management, knowledge architecture, and research portfolio. Engineering includes platforms/APIs, data services, research computing, and advanced analytics. React, PostgreSQL, CI/CD, and some infrastructure capabilities are documented by the graph rather than the CV and are not attributed to a specific employer or project.

Source discrepancy: the graph labels an environmental-intelligence effort **SourceWatch**, while the CV names **SourceAware.io**. The site uses the neutral description “Environmental decision support” and does not assume these names refer to the same system. The LRP is presented as a graph-supplied project area without inventing employment dates, study results, or a leadership role.

Organizational project descriptions are intentionally high-level. Internal architecture, initiative/strategy details, unpublished findings, source code, participant records, personal telephone/locality details, and unsupported impact metrics are excluded. The CV-listed email is used as the contact address. NIH/NSF proposal support and open/FAIR data appear only as graph-supplied **output directions**, not funded awards or released datasets.

The supplied PDF is readable and downloadable, but includes personal telephone/locality information and employer-specific strategy/architecture descriptions that require public-disclosure review. It has **not** been copied into this public repository; no fake or empty PDF has been created. The disabled CV button remains intentional.

## Remaining publication actions

- Supply an approved public CV PDF with appropriate contact and organizational details removed. Add it at `assets/documents/joseph-hess-cv.pdf`, then replace the disabled control with a “View CV” link to that relative path. The nearby HTML comment explains the requirement.
- Supply verified GitHub, LinkedIn, and ORCID profile URLs; those placeholders remain noninteractive.
- Confirm the environmental-project naming discrepancy before using a project brand or URL.
- Add approved public project artifacts and publication links when supplied; none are invented.
- Update the canonical URL, sitemap, robots sitemap URL, and `CNAME` together if the domain changes.

Open Graph and Person JSON-LD metadata are included. Structured data keeps the formal title, verified degree names, and institutions separate from the broader scope; it omits private contact details and unknown social-profile URLs.

## Manual checks

- Check desktop and narrow mobile widths, keyboard focus, skip link, and all navigation anchors.
- On mobile, verify menu open/close, Escape returning focus, and navigation after resizing. Disable JavaScript and confirm navigation remains available.
- Enable reduced motion and verify anchor scrolling is not animated.
- Confirm unavailable CV/profile placeholders do not navigate to broken URLs.
- Confirm all local assets load, and preview `404.html` via HTTP.

The site uses system fonts and makes no third-party script, font, analytics, tracking, or form-service requests.
