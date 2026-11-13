# Joseph Hess, PhD | Scientific Research Architect

A scientific portfolio connecting chemistry, computational science, scientific informatics, and research technology. Scientific Research Architect is the professional identity; Data Scientist remains the formal UL Research Institutes employment title. Scientific computing describes a supporting technical capability, while computational science is the broader scientific domain.

## Public professional channels

- Portfolio: https://hess80.github.io/
- GitHub: https://github.com/hess80/
- LinkedIn: https://www.linkedin.com/in/joseph-hess-phd/
- ORCID: https://orcid.org/0000-0003-0458-3728

GitHub is a location for public technical work and selected repositories. The portfolio does not infer original authorship from forks or pinned repositories or display activity metrics.

## Preview and publishing

Open `index.html` directly, or run:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`. There is no build process, framework, package installation, or runtime dependency.

**Deployment is exclusively through GitHub Pages.** In repository **Settings → Pages**, select **Deploy from a branch**, `main`, and `/ (root)`. The root contains `index.html` and `.nojekyll`. Use the standard user-site hostname above; leave the Pages custom-domain field empty. No `CNAME` file, Cloudflare Workers project, or Cloudflare build integration is needed for this static site. Canonical, Open Graph, sitemap, robots, and Person structured-data URLs use the same portfolio URL.

Normal assets and anchors use relative paths. The 404 page uses root-relative paths so nested missing URLs remain usable on the user site; preview it over HTTP rather than as a local file.

## Structure

- `index.html`: identity, foundation, three capability pillars, five work areas, scholarship, about, and public contact links.
- `assets/css/styles.css`: responsive HTML/CSS knowledge graph, blue/green/purple pillars, readable typography, and reduced-motion support.
- `assets/js/main.js`: progressively enhanced navigation, with a 760px mobile breakpoint, Escape focus restoration, and content available without JavaScript.
- `404.html`, `.nojekyll`, `robots.txt`, `sitemap.xml`: static hosting and discoverability.
- `assets/documents/`, `assets/images/`: approved public assets only.
- `demos/chemexplorer/`: ChemExplorer technical case study; not a hosted Streamlit application or a published chemical dataset. See [release guidance](demos/chemexplorer/README.md) for the private-to-public export boundary.

## ChemExplorer integration

The homepage links to a case study of Joseph's standalone PubChem Chemical Space Explorer. The local project's README describes the current implementation; its older implementation plan still says planning only and is not treated as current application status. The supplied source repository is `hess80/Nexus`; an anonymous request returned 404 during integration. This does not establish whether it is private, renamed, or unavailable. No public runtime URL was supplied or verified.

No files from the local project, caches, datasets, examples, or reports were copied into this portfolio. No private-repository credentials are needed for the case study. The current branch-based Pages deployment remains unchanged. A future approved static report can live under this directory; Streamlit acquisition and Python analysis cannot run on GitHub Pages. A private-source build and Pages Actions deployment are options, not configured functionality.

## Factual sources and editorial boundaries

The supplied three-page CV and knowledge graph from the earlier portfolio pull request, the **Career Path Summary 2025-2026**, and the certified **NIH Biographical Sketch Common Form and Supplement** subsequently attached to this pull request were reviewed. The current certified biosketch takes precedence for formal dates and appointments where the older CV differs, except where Joseph explicitly corrects the portfolio record; the career summary informs current professional scope and project context. The knowledge graph informs site organization. The career summary and project-specific biosketch also include unpublished and organization-specific detail; only measured, public-safe statements are represented here.

The current certified biosketch verifies Rutgers **B.S. Chemistry (2013-2016)** and Clemson **PhD Computational Biophysical Chemistry (2017-2023)**; the CV additionally identifies a Mathematics Minor. It records Army training **2003-2011** and an FDA **ORISE Fellowship in Applied Regulatory Science (2016-2017)**. Joseph explicitly confirmed on November 12, 2026 that UL Research Institutes employment is **2022-present**; this supersedes the earlier 2023 start-date statement in this README and agrees with the homepage. The site uses the formal ULRI title **Data Scientist** and the requested FDA fellowship framing, not functional descriptions as new job titles. Doctoral research and ULRI employment overlap.

The graph supplies the relationship model: foundation -> capabilities -> work -> outputs. The site's primary capability pillars are **Computational Science**, **Scientific Informatics**, and **Research Technology**. Scientific computing is a supporting capability within research technology, covering computational tools and workflows. The CV takes precedence over abbreviated or inconsistent graph degree labels. The CV's SourceAware name and the user's explicit naming direction take precedence over the different environmental-project name in the graph; no equivalence between brands is inferred.

The career summary describes work across reusable software, data architecture, and workflow optimization. The certified biosketch provides additional evidence for SourceAware ingestion, QA/QC, geospatial and monitoring context, output reporting, reusable chemical/exposure analysis methods, source-linked research discovery, and the proposed-study data framework. Work summaries distinguish:

- **Documented platform capabilities:** SourceAware architecture and development; automated multi-source pipelines, data quality checks, geospatial visualization, monitoring context, and analytical/reporting outputs. Extensions such as added sensor networks and active-event data are not presented as completed features. AI-assisted narratives are described as summaries of validated outputs, not independent evidence.
- **Documented analytical methods:** Exposure-science workflows include feature stability, nested cross-validation, permutation testing, and null/feature benchmark comparisons. Chemical hazard reporting preserves traceability between identity, properties, classifications, and source evidence. No unpublished analysis or compound ranking is disclosed.
- **Documented knowledge workflows:** API-based acquisition, normalization, de-duplication, reconciliation, source-linked organization, recommendation and tracking; RAG and task-specific language-model approaches are described as evaluated methods requiring human review.
- **Proposed-study design:** The longitudinal data-management framework and platform design are documented, but proposed study collection and integration features are not represented as a deployed production system. No participant information, internal protocol, access diagram, or confidential deployment detail is included.

All four peer-reviewed publication citations, bibliographic identifiers, and the selected conference presentation are verified against the current certified biosketch and older CV. The 2023 doctoral dissertation, conference presentation, SourceAware scientific product, and analytical/software contributions are kept distinct. Verified DOI links accompany all four publications; PubMed or PubMed Central links use identifiers in the certified biosketch or CV. The SourceAware URL in the source materials is organization-specific and is intentionally not published. Software and analytical workflows are not represented as unrestricted public releases.

Excluded information includes unapproved career history, personal contact details, unit specifics, internal project addresses and architecture, organizational strategy, compound rankings, participant data, unpublished findings, manuscripts, unsupported claims of people-management or executive authority, unsupported impact claims, and unverified scholarly profiles. The source CV is not published because it requires public-disclosure review. No disabled CV button or placeholder contact channel is shown.

## Review and maintenance

Before changing formal facts, consult the current certified CV or biosketch. Use the graph for organization and an approved career summary for project context; do not promote proposal or experimental work to implemented capabilities. Require public-safe evidence before adding project links, releases, metrics, or deployment claims.

Remaining human review:

- Confirm project-by-project whether experimental and extensible SourceAware features have since become built, public capabilities.
- Confirm what aspects of the longitudinal platform are implemented versus limited to proposed-study design before changing its status.
- Supply approved public software/data artifacts if available.
- Independently check LinkedIn, ORCID, and the live portfolio: automated HTTP verification was blocked by the session's network restrictions. GitHub returned HTTP 200.
- Add a public CV only after disclosure and document-accessibility review.

Responsive checks cover 375, 768, 1024, 1440, and 1920px widths, 320px reflow, native 200% browser zoom, keyboard navigation, expanded disclosure content, reduced motion, and JavaScript-disabled navigation. Automated accessibility checks use WCAG 2.2 AA rules; they do not replace human accessibility review. Maintain meaningful profile-link text, visible focus, approximately 44px interactive targets, and non-color pillar labels. No third-party scripts, fonts, forms, analytics, or trackers are loaded.
