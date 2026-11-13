# ChemExplorer portfolio integration

## Current release

This directory contains a static technical case study linked from the portfolio. It does not contain application source, chemical data, precomputed results, or a Streamlit runtime. The case study describes implementation practices from the local project's README; neither application tests nor analytical results were independently verified in this integration.

The owner supplied `https://github.com/hess80/Nexus.git`. An anonymous request returned 404. Repository privacy, default branch, Actions settings, licensing, and public runtime availability remain unverified. Do not put the local OneDrive path, internal connections, or credentials in public build configuration.

## Smallest runnable milestone

Add one approved, precomputed report with real filtering and record-to-method traceability. Keep the actual Python analysis in the separate source project; do not port scientific algorithms to JavaScript. The report should use reviewed public inputs, with source-specific attribution and redistribution permission, or explicitly labeled synthetic fixtures. Do not copy local example folders or cached run manifests wholesale.

The source project's documented downloads are CSV, JSON, and methods artifacts, not a static web application. An explicit exporter and a thin report viewer are still required. GitHub Actions cannot convert Streamlit into HTML merely by running it.

Proposed release contract:

- Export only `report.json` and required approved visual assets; schema validation must reject unknown fields and unapproved source/data identifiers.
- Include a release identifier, source commit, application/dependency versions, methods, input provenance, source snapshot dates, limitations, and checksums. Review provenance itself for disclosure risk.
- Generate into an empty staging directory from explicitly selected inputs. Never package the checkout root, `data/`, `Examples/`, caches, logs, `.env`, Streamlit secrets, or trained artifacts by default.
- Render stored results in a static HTML/CSS/JavaScript viewer. Label them precomputed; filtering must not imply fresh PubChem acquisition or model training.
- Keep the portfolio styles and navigation independent of the report's analysis code. No framework migration, database, or service is needed for this release.

Suggested public files after approval: `report/index.html`, `report/viewer.js`, `report/report.json`, and any individually approved images. Do not create an empty report link before these exist.

## Private source to public demo

```text
Separate source repository (visibility to be confirmed)
  -> pinned, reproducible Python build using approved inputs
  -> allowlisted export + schema/secret/disclosure checks
  -> human approval of the exact checksum-identified bundle
  -> promotion of approved static files only
  -> portfolio Pages deployment
  -> /demos/chemexplorer/report/
```

Start with manual review and promotion of the bundle into this portfolio. This preserves existing branch publishing and needs no cross-repository secret. Automate only after the exporter, safe input fixture, and release checks work locally.

If automation is warranted, prefer building inside the private source repository so private code never needs to be checked out by public portfolio workflows. Its normal `GITHUB_TOKEN` is repository-scoped and does not automatically grant write access to this portfolio. Use a narrowly scoped GitHub App installation token or equivalent reviewed cross-repository credential for promotion, stored only as a secret. Never expose it to browser JavaScript, pull requests from untrusted forks, or build logs. Do not grant private-source access to public pull-request builds.

Treat artifacts, workflow logs, generated JavaScript, images, and metadata as disclosure surfaces. Automated scanning is not a substitute for approval. Approval must apply to the exact bundle promoted; rebuilds require renewed checks and approval. Do not upload unreviewed output to a public repository as a staging mechanism.

If switching to Pages Actions, change Settings > Pages to GitHub Actions and retire competing branch publication. Use the official configure/upload/deploy Pages actions pinned to reviewed full commit SHAs. Assemble a clean site directory from allowlisted portfolio files and the approved bundle, then upload that directory, not the workspace. Limit the deploy job to `pages: write` and `id-token: write`, use the protected `github-pages` environment, and serialize deployments. Source credentials belong only in the source build/promotion job, never in the Pages artifact.

No Actions workflow is added now: there is no inspected exporter, approved input/output bundle, source-access configuration, or release approval process to execute safely.

## Acceptance criteria

1. Review code ownership, dependency licenses, and record/source-specific redistribution terms before publication. Record approval without publishing private review material.
2. Build the report from reviewed inputs without original research records, restricted-data-derived models, caches, secrets, or internal URLs. Inspect images and downloadable exports as well as page text.
3. Verify the release schema, exact output allowlist, reproducible build configuration, and bundle checksums. Unexpected files or provenance fields fail the build.
4. Test exact filtered rows, counts, reset behavior, export contents, missing values, and malformed/unavailable data. Keep the current case study usable when a report fails to load.
5. Check keyboard operation, visible focus, table equivalents for charts, 320px reflow, desktop layout, 200% zoom, and reduced motion in a browser.
6. Confirm the deployed nested URL and relative asset paths. Show the recorded run's date/version and execution boundary visibly; do not describe a static viewer as a live API or retraining tool.
7. Promote only the approved bundle; inspect the final public artifact and confirm no private source checkout or unreviewed output is present. Keep the previous approved release available for rollback.

Live Streamlit hosting is a separate later choice. It requires verified RDKit/runtime support, shared PubChem rate coordination, bounded inputs and execution, a reviewed cache/storage policy, operational ownership, and graceful outage behavior. Pages remains the static portfolio, never the Python execution host.