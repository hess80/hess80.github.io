# Portfolio evolution plan

## Recommendation

### ChemExplorer integration update: November 13, 2026

Joseph supplied the standalone ChemExplorer application and `hess80/Nexus` as its source repository. The local README describes an implemented Python/Streamlit PubChem Chemical Space Explorer with RDKit analysis, group-label validation, separate deposited GHS evidence, and versioned exports. The project's older implementation plan is stale (it still states planning only). This integration did not execute the application or independently verify its test suite, analytical outputs, licensing, or deployment. Anonymous GitHub access returned 404; repository visibility is not established.

The current milestone is a [technical case study](demos/chemexplorer/index.html) and homepage evidence entry. No source-project data or code was copied. This standalone public-data demo is not a reproduction of HazardPrint or SHV research pipelines and does not substantiate their predictive performance.

**Recommended next implementation milestone:** export one reviewed precomputed ChemExplorer report, then add a bounded static report/provenance viewer under `demos/chemexplorer/report/`. This provides inspection of actual outputs with minimal architectural expansion. CSV/JSON downloads are not themselves a static web app; the exporter, viewer, and public-safe fixture remain to be implemented and approved. See [release guidance and acceptance criteria](demos/chemexplorer/README.md).

Keep private scientific development separate from public publication. Start with manual approval/promotion of explicitly allowlisted assets; consider private-source CI followed by approved promotion and Pages Actions only after the release contract exists. No browser access to private repositories, broad source copying, automatic claims of sanitization, or framework migration is needed. The earlier mixture-workbench proposals below remain future options rather than claims about the ChemExplorer implementation.

Preserve the current design and the three identity pillars: **Computational Science**, **Scientific Informatics**, and **Research Technology**. Add evidence, not a more ambitious title or a larger technology stack.

Introduce **Demos & Technical Evidence** as a compact section adjacent to Representative Work. Each entry should connect a real problem, Joseph's contribution, an inspectable artifact, and implementation evidence. Launch one substantial example before expanding to two or three complementary examples.

**Recommended first milestone:** a **Mixture Analysis Workbench** using the publishable mixture-analysis informatics tooling, HazardPrint modeling approach, and SHV fingerprint ML pipeline, with synthetic mixture data and a reviewed snapshot of public chemical information from PubChem. These tool names follow Joseph's description; their actual interfaces and implementation have not yet been inspected. Present several connected capabilities as one end-to-end case study rather than unrelated dashboards.

**Owner clarification, November 12, 2026:** Joseph confirms that the tooling can be published, but the original research data cannot. Reuse the actual releasable tooling rather than recreate a superficial approximation. Exclude original datasets, fitted artifacts derived from restricted data, and embedded private examples unless separately cleared.

## 1. Audit scope and current architecture

This review examines the local working copy, including existing uncommitted changes. It is a source-based review, not a fresh browser, accessibility, live-deployment, or external-profile verification. The supplied CV and biosketch themselves were not available in this repository; statements about them below reflect repository documentation, not independent credential verification.

| Evidence | Current implementation | Implication |
| --- | --- | --- |
| [Homepage](index.html) | Single semantic HTML page: identity, foundation, three capability pillars, five work areas, scholarship, about, contact | The professional narrative is already established; no rewrite is needed |
| [Styles](assets/css/styles.css) | Shared palette, responsive layouts, native disclosure styling, visible focus, reduced-motion handling | Extend these patterns instead of creating a separate visual identity |
| [Navigation script](assets/js/main.js) | Progressive mobile navigation with Escape focus restoration | JavaScript currently supports navigation, not analytical demonstrations |
| [Repository documentation](README.md) | No build step or runtime dependencies; GitHub Pages branch deployment instructions | Keep the portfolio static unless a particular demo needs more |
| [Documents guidance](assets/documents/README.md) | Public CV withheld pending disclosure review | Do not add a CV link until an approved artifact exists |
| Asset inventory | No report samples, screenshots, datasets, or runnable domain demos found | Choosing publishable source material is the immediate prerequisite |
| Repository inventory | No package manifest, backend, automated test suite, or CI workflow found | Add validation in proportion to new interactive behavior |

The repository documents GitHub Pages as the publishing target. Actual Pages settings, deployed content, and availability have not been independently checked.

### What the portfolio already demonstrates well

- A distinctive scientific identity rather than a generic software-developer profile.
- A coherent progression connecting chemistry, computation, informatics, and reusable research systems.
- Meaningful contribution summaries for SourceAware, chemical analysis, hazard evidence, longitudinal infrastructure, and knowledge engineering.
- Important distinctions between measured evidence, modeled outputs, generated text, and interpretation.
- Separation of implemented work, evaluated methods, and future directions in several project descriptions.
- Linked scholarship as evidence of scientific participation; publications are not substitutes for software evidence.
- A restrained, dependency-free frontend with accessibility-oriented foundations.

## 2. High-level representation and qualification

The current material supports presenting Joseph's work as spanning scientific analysis, research software, data/informatics systems, and architecture. The missing layer is not stronger adjectives: it is visible proof of technical decisions and individual contribution.

Keep **Scientific Research Architect** as the professional identity, while explicitly distinguishing it from the formal employment title **Data Scientist**. Avoid interpreting breadth alone as proof of staff/principal level, enterprise ownership, people management, or production responsibility.

For each featured project, make these questions answerable:

1. **Problem:** Who needed what, and why was the existing approach insufficient?
2. **Contribution:** What did Joseph personally design, implement, evaluate, or integrate? What was collaborative?
3. **Technical judgment:** What constraints and tradeoffs shaped the solution?
4. **Artifact:** What can a visitor inspect or use?
5. **Validation:** How were correctness, quality, and failure cases assessed?
6. **Outcome:** What verified capability or deliverable resulted? Use metrics only if documented and approved.
7. **Boundary:** Is this the original system, an approved adaptation, a synthetic reconstruction, or a proposed design?

### Recruiter/HR readability gaps

- Foundation and a long capability taxonomy precede concrete work. Consider moving selected work/evidence earlier while retaining the foundation as supporting context.
- Terms such as QSAR, reconciliation, provenance, and semantic retrieval benefit from one short practical explanation near their first relevant example.
- Work cards describe broad systems but do not yet show a sample screen, input/output example, project-specific code link, or architecture explanation.
- A general GitHub profile requires visitors to discover relevant implementation themselves. Link directly to an approved project, module, example, or test.
- Functional role mapping could be clearer without inventing employment titles: research software engineering, scientific data engineering, scientific informatics, and research systems architecture.
- Several disclosures dominate the technical details. Keep a concise status/data label visible, with longer limitations in the case study; do not remove necessary scientific caveats.
- No approved public CV is currently available. A reviewed, concise resume would help recruiter scanning if Joseph wishes to publish one.

### Confirmed employment date

Joseph explicitly confirms ULRI **2022-Present** as correct. The homepage already uses this date; the earlier 2023 statement in the README has been corrected. This is no longer an open consistency issue. Continue distinguishing the formal Data Scientist employment title from broader functional descriptions.

### Claims lacking visible implementation evidence

These are evidence gaps, not findings that the claims are inaccurate.

| Current claim area | Useful public-safe evidence |
| --- | --- |
| Automated ingestion and QA/QC | Sample source, normalization rules, validation failures, reproducible run, tests |
| Traceable analytical reporting | Interactive report, record-to-source links, assumptions, downloadable structured output |
| APIs and analytical services | Approved request/response example, schema, errors, tests; a live endpoint only if useful |
| Knowledge engineering and AI-assisted workflows | Source-linked extraction, bounded tool trace, reviewer decisions, evaluation and failure examples |
| Platform architecture and reusable systems | Generalized data flow, interface boundaries, one documented tradeoff, reusable implementation |
| Model validation and uncertainty | Approved or synthetic reproducible example showing evaluation design and limits; no unpublished results |
| Interactive tools and visualization | Usable task-oriented interface with accessible states and inspectable underlying data |

## 3. Section and case-study design

Keep Representative Work for the professional overview. Add **Demos & Technical Evidence** directly after it initially; consider bringing selected work earlier after reviewing the resulting page length. Do not publish empty cards or nonfunctional demo buttons.

Each demo card should show:

- A concrete title and one-sentence user benefit.
- A screenshot or small output preview when it adds information.
- Two or three capabilities supported by the artifact.
- Joseph's contribution and project context: professional, personal, or independent demonstration.
- Separate labels for execution mode and provenance, for example **Interactive static sample** and **Synthetic data**.
- **Try demo**, **Read case study**, and **View implementation** links only where those destinations exist.

Each detail page should present: problem -> contribution -> working example -> architecture -> decisions -> validation -> limitations -> implementation. Keep the introductory explanation understandable in 30 seconds; let technical readers go deeper.

Use the existing pillar colors and components. Avoid a second navigation system, a complex project search, or a dashboard-style homepage for only a few examples.

## 4. Which demonstrations to build

The mixture-analysis workbench is now the selected direction. The remaining candidates below are supporting capabilities or later additions, not competing priorities. Exact scope depends on inspecting the actual tooling and its input/output contracts.

### Selected flagship: Mixture Analysis Workbench

**Recruiter-accessible explanation:** "Explore how chemical mixtures become structured information, analytical fingerprints, and reproducible model reports."

Provide four views within one demonstration:

| View | Visitor interaction | Implementation evidence |
| --- | --- | --- |
| Mixture explorer | Select a preset or seeded synthetic mixture from a bounded chemical catalog; inspect components and simulated abundance | Data generation, chemical identity handling, schema validation, reproducibility |
| Informatics / HazardPrint | Inspect annotations, computed features, missingness, and source links; compare mixture representations | Actual supported identity, annotation, fingerprint, and modeling operations after code inspection |
| SHV fingerprint / ML | Select a precomputed experiment; inspect preprocessing, split design, validation, feature stability, and metrics where supported | Existing pipeline reused on synthetic data, with reproducible configuration and tests |
| Report and provenance | Trace an output to inputs, processing configuration, data snapshot, and code version; export a report | End-to-end traceability and usable scientific reporting |

These are proposed UI views, not assertions that either tool implements every listed operation. Do not expand SHV, define HazardPrint's algorithms, or invent endpoint meanings before reviewing the implementation.

#### Synthetic data design

- Select a bounded catalog of PubChem records using documented inclusion criteria. Preserve chemical identifiers, selected field provenance, retrieval dates, and applicable source/redistribution terms. Verify access guidance before implementing acquisition.
- Sample chemical sets with a fixed seed; generate mixture identifiers, component membership, abundance or concentration, replicates, and missingness under explicit rules. Use concentration units only when the simulation defines them meaningfully; otherwise use labeled relative abundance.
- Keep public chemical identity/properties distinct from simulated mixture observations and labels. Do not describe the entire dataset as measured PubChem mixture data.
- For supervised learning, random chemical sets alone are insufficient: define an explicit synthetic target-generating process. Include controlled signal/noise, null-label comparisons, and known limitations. If no target is appropriate, demonstrate supported unsupervised analysis instead.
- Labels derived from the same descriptors used as predictors can make a circular toy task. Disclose such construction and do not interpret its score as hazard validation. Prefer a transparent simulation demonstrating pipeline behavior rather than claiming real-world predictive value.
- Split by the relevant independent unit before learned preprocessing; keep simulated replicates/related mixtures together where needed. Fit imputation, scaling, and feature selection inside training folds. Assess overlap between train/test chemicals according to the intended task, not an unexplained random split.
- Keep original research records, learned preprocessing, fitted models, embeddings, cached reports, and other restricted-data-derived artifacts out of the release unless independently cleared. Train the public demonstration on synthetic/public inputs.
- Random mixtures are educational examples, not evidence that these chemicals co-occur, are experimentally compatible, or have a validated combined hazard. Avoid mixture safety rankings and unsupported additive/synergistic interpretations.

#### What runs where

For the first version, execute the actual tooling offline on a small set of versioned synthetic scenarios, publish the reproducible generator/configurations and permitted pipeline code, and bundle resulting artifacts for interactive inspection on GitHub Pages.

Make the execution boundary visible: selecting/filtering precomputed results is interactive, but is not retraining a model. A newly generated mixture must not display a cached result from a different mixture. Restrict results to matching presets, or explicitly mark uncomputed mixtures as having no analysis yet.

Later, add bounded live execution only if it provides enough value to justify compute, resource limits, and hosting. Do not reimplement scientific algorithms in JavaScript solely to avoid a backend.

| Priority / candidate | Minimal useful UI | Evidence provided | Execution and boundaries |
| --- | --- | --- | --- |
| 1. Report and provenance explorer | Filters, summary, one visualization with a table equivalent, detail panel, source/validation view, export | Analytical reporting, information design, data contracts, traceability, reproducibility | Static approved or synthetic dataset; show that filtering is real but original pipeline execution is not happening in-browser |
| 2. Acquisition and normalization workbench | Choose a bundled source fixture; compare raw input, normalized records, duplicates, and rejected records | Scraping/API acquisition, parsing, reconciliation, validation, failure handling | Run a browser-compatible parser locally or show a labeled recorded run of the actual offline pipeline; no arbitrary URL fetching |
| 3. Bounded AI evidence-review workflow | Select a preapproved task; inspect steps, source passages, structured output, and reviewer accept/reject actions | Agent orchestration, tool boundaries, evidence grounding, human review, evaluation | Start with clearly labeled recorded runs; a live service is optional and must be justified |
| 4. Informatics comparison tool | Select records; compare properties, missingness, source evidence, and measured/predicted labels | Data modeling, evidence integration, uncertainty communication | Approved public records with redistribution rights, or explicitly synthetic examples; no unpublished rankings |
| Optional. Personal engineering project | One complete user journey appropriate to the actual project | Transferable engineering, UX, automation, service integration, or testing | Identify it as personal work; choose based on complementary depth rather than chemistry relevance |

Do not build all five. A useful eventual set is **one reporting/informatics example, one acquisition or agent workflow, and one complementary personal project**. A scraper plus AI extraction plus report may be one integrated case study, not three near-duplicate demos.

### Reports do not need a full application

Use a thin inspection layer: an HTML report reader with filtering, expandable evidence, and reproducible export. Pair a polished approved static report with the structured data behind it. If the original is a PDF, provide an approved downloadable copy and an accessible HTML summary rather than relying on a PDF embed.

Show what changes when a visitor interacts. A filter may select existing results; it must not be described as rerunning the analysis. Retain the report date, data version, method context, limitations, and source references.

### Tools without a UI

Build a **task-shaped interface**, not a generic control panel:

- Scraping: "See how inconsistent source records become validated data."
- Informatics: "Compare records and inspect the evidence behind each field."
- Agents: "Inspect how a bounded task uses tools, cites sources, and requests review."

For CLI or pipeline tools, a labeled recorded execution, annotated input/output, and tested runnable public example may be more credible than a newly invented UI. A screenshot demonstrates presentation; it does not demonstrate backend execution.

### AI agents: demonstrate control and evaluation

Prefer a source-grounded extraction or review task to an open-ended chatbot. Show task constraints, permitted tools, source excerpts, schema checks, stop/retry conditions, and human corrections where applicable.

Include both a successful example and a failure or abstention. Report evaluation methods and results only when actually measured. A recorded trace proves what that run contains, not general agent reliability or a live deployment.

### Personal projects belong when they add evidence

Chemistry is not a requirement for every artifact. A strong personal project can show product thinking, deployment, testing, accessible interaction, or integration that scientific work cannot disclose. Keep scientific work as the main professional narrative, and explain the transferable capability in one sentence. Do not assign a scientific purpose to an unrelated project.

## 5. Architecture and hosting options

### MVP: static portfolio plus bounded interactive examples

- Retain semantic HTML, existing CSS, and small page-specific JavaScript files.
- Publish demos as directory pages with an `index.html`, compatible with GitHub Pages.
- Serve reviewed JSON fixtures and static report assets from the repository. No database or backend is needed for filtering and inspecting a small dataset.
- Keep any Python/R generation step offline and independently reproducible if its implementation can be released.
- Use a local HTTP server for demos that load JSON; direct `file://` preview is not a reliable data-loading path.
- Add a charting library only when the chosen visualization warrants it; otherwise use semantic tables and simple SVG/HTML.
- Framework migration is not justified by the current site or the first proposed demo.

### Optional service: only for meaningful live computation

If an approved demo requires Python execution or actual agent tools, host it separately and link from the static portfolio. A small FastAPI/Pydantic service could fit Python workflows; a Node/TypeScript service could fit an existing JavaScript project. Reuse the project's language rather than introduce both.

Before exposing it, require typed request/response schemas, explicit errors, timeouts, bounded inputs, tests, privacy-conscious logging, rate/cost limits, environment-based secret handling, and narrowly configured CORS. Keep a useful labeled static example available when the service is unavailable.

Do not run arbitrary submitted code or unrestricted URL scraping. Constrain fetch destinations and guard against SSRF, unsafe redirects, oversized responses, and unintended network access. Do not put AI-provider keys in frontend code. Avoid uploading user documents in the first version.

GitHub Pages cannot execute backend code. A recorded run must be labeled as recorded; a static fallback must never report that a failed live execution succeeded. Choose a service host only after checking supported runtimes, operating cost, data handling, and maintenance requirements.

### Later frontend tooling

Consider Vite/TypeScript or a component framework only if multiple demos develop substantial shared interactive state or complexity. Keep the main portfolio independently deployable. Do not migrate merely to display a technology name.

## 6. Public disclosure and data handling

Before selecting a project, confirm code ownership, permission to publish, dependencies' licenses, source-data redistribution rights, and any employer review requirements.

- Use approved public assets or clearly labeled synthetic data. Publicly accessible data is not automatically licensed for republication or scraping.
- Follow source terms, robots guidance, permitted access methods, and rate limits; do not bypass access restrictions.
- Exclude participant information, internal URLs, endpoints, credentials, study protocols, unpublished findings, and restricted architecture.
- Review screenshots, PDF metadata, logs, traces, comments, filenames, and exports, not just visible page text.
- Reconstruct demonstrations independently where appropriate. Renaming fields does not make confidential data or code safe.
- Identify each artifact's source, license/permission, snapshot date, transformation, and limitations.
- For scientific examples, distinguish measured, calculated, predicted, and generated values.
- Keep synthetic labels visible in the interface and exported artifacts.
- For AI traces, use approved excerpts and safe tool-event summaries; do not publish secrets, private prompts, or confidential reasoning/log content.

## 7. Recommended MVP and first milestone

### Milestone: synthetic mixture analysis, informatics, and ML case study

**Objective:** demonstrate the actual mixture-analysis tooling from chemical information through analytical fingerprints and ML validation to traceable reporting, without publishing original research data.

**Audience:** recruiters get an immediately understandable output; technical reviewers inspect schema, validation, provenance, implementation, and design decisions.

**Scope:**

1. Inspect the HazardPrint and SHV fingerprint tooling, dependencies, input/output schemas, existing tests, and an approved example configuration. Identify reusable modules and document any adaptation required for synthetic data.
2. Prepare a bounded public chemical catalog and seeded synthetic mixtures, plus a documented target generator if demonstrating supervised ML.
3. Run supported informatics and ML steps using the actual tooling; save outputs, configuration, validation artifacts, and provenance. Do not promise particular algorithms or evaluation features before inspection.
4. Build a thin static workbench with mixture selection, component/features inspection, precomputed experiment results, and report export. Clearly separate public chemical facts, simulated observations, calculated features, and model outputs.
5. Add a case study with the real data flow, Joseph's contribution, methodological tradeoffs, limitations, and code/test links.
6. Add one homepage evidence card linked to chemical fingerprint/exposure analysis and chemical hazard/evidence work, then verify behavior and accessibility.

**Explicit exclusions:** accounts, database, arbitrary uploads, live scraping, live AI generation, new cloud infrastructure, and a framework migration.

The tooling is publishable per Joseph's clarification; the original data remains excluded. If an operation depends on restricted reference inputs, replace them with a documented permitted source or explicitly leave that operation unavailable.

### Acceptance criteria

- A first-time reader can identify the problem, contribution, and execution/data status without opening technical details.
- At least one real end-to-end interaction works; reset restores the initial state.
- Every displayed sample finding can be traced to a record/source or an explicitly synthetic origin.
- Filtered counts and exports match the current selection; tests assert exact expected rows and values.
- Validation includes a malformed record and a missing-value case; invalid data produces an explicit, useful message rather than misleading output.
- Loading failure, empty results, and errors have distinct states; a failed fetch is not replaced silently with plausible data.
- Keyboard operation, focus visibility, semantic labels, non-color status cues, and accessible tabular equivalents are verified.
- Check 320px reflow, representative mobile/desktop widths, 200% zoom, and reduced motion.
- With JavaScript disabled, the case-study explanation and approved static sample remain available; controls do not pretend to work.
- Public implementation includes reproducible local instructions and focused tests for the shipped transformations and interactions. Use existing tooling first; choose new test tooling only once implementation needs are known.
- Check local links and deployed directory routes over HTTP; confirm no secrets, confidential assets, or unintended third-party requests.
- No placeholder links, invented outcomes, or claims that the original professional system is publicly deployed.
- Identical seed, configuration, and versioned inputs reproduce the same synthetic dataset; tests assert expected components and values.
- Every result matches its mixture, experiment configuration, data snapshot, and pipeline version. No random metric generation or mismatched cached outputs.
- Synthetic labels appear in views, figures, reports, and exports; public chemical metadata has separate provenance.
- Supervised evaluation documents the synthetic target, independent split unit, leakage controls, and baseline/null behavior. Any performance numbers apply only to that simulated task.
- Tests cover missing annotations, unresolved identities, and unsupported records without treating missing hazard information as evidence of safety.

### Phase 2

- Add one complementary acquisition or recorded agent example with failure cases and evaluation.
- Expand the mixture workbench with additional supported representations, scenario comparisons, and bounded live execution only after the static end-to-end example is validated.
- Add a personal project only if it demonstrates something materially different.
- Extract genuinely repeated UI or schema helpers after duplication appears.
- Add proportionate CI for tests, link checks, and accessibility checks as interactive code grows.
- Consider a bounded live API only when reviewers gain evidence unavailable from static inspection.
- Add an approved public resume and project outcomes when those artifacts are available.

## 8. Proposed repository structure

Illustrative only; create directories when corresponding content exists:

```text
index.html
PORTFOLIO_EVOLUTION_PLAN.md
README.md
assets/
  css/styles.css
  js/main.js
  documents/                 approved public reports/resume only
  images/                    approved previews and diagrams
demos/
  mixture-workbench/
    index.html
    demo.js
    data/sample.json
    README.md                schema, provenance, execution mode, local setup
case-studies/
  mixture-workbench/
    index.html
tests/                       focused tests when interactive logic is added
```

Keep the demonstrable pipeline in its existing public repository if appropriate, with direct links. Otherwise include a small reviewed implementation alongside the demo. Do not copy a large private tool into the portfolio. Add a `services/` directory or separate service repository only if the optional live service is approved and implemented.

## 9. Avoid unnecessary expansion

Do not add Kubernetes, microservices, authentication, a database for static fixtures, a generic chatbot, decorative technology logos, invented activity/impact metrics, unrestricted scraping, or a fleet of thin dashboards.

A polished interface helps, but **a bounded task, inspectable data flow, explicit failure handling, reproducible implementation, and honest limitations** are the stronger qualification signals.

## 10. Inputs needed before implementation

Provide a short inventory of candidate artifacts, not confidential originals:

For the selected milestone, the next required input is the repository or local path containing the HazardPrint and SHV fingerprint tooling, together with a safe configuration or schema example. Original research data is neither needed nor requested. Inspect these before selecting models, descriptors, dependencies, or execution infrastructure.

| Field | What to provide |
| --- | --- |
| Project/report | Name or safe working label and intended user |
| Contribution | What Joseph built, what was collaborative, and current status |
| Existing form | CLI, notebook, script, PDF, dashboard, API, or application |
| Publishable material | Approved screenshot, code link, public dataset, or synthetic substitute |
| Demonstrable task | One useful input -> action -> output interaction |
| Constraints | Ownership, review requirements, runtime/API dependencies, hosting cost |

Choose the first artifact on evidence value, relevance, disclosure safety, and maintenance effort, not on how many technologies it uses.
