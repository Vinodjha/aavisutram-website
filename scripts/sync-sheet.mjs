/**
 * sync-sheet.mjs — PLACEHOLDER for the next build phase.
 *
 * Goal: read product rows from a shared Google Sheet + linked Drive photo
 * folder, and regenerate src/data/products.json from them, so the site
 * owner can add a new piece just by adding a row to the Sheet — no code
 * editing required.
 *
 * Planned shape (to be implemented in the "content pipeline" step):
 *   1. Read rows from the Sheet via the Google Sheets API (a read-only
 *      service account, or the Sheet published as CSV for a simpler,
 *      no-credentials version).
 *   2. For each row, resolve the Drive photo link to a public image URL
 *      (or download + optimise it into /public/images/products/).
 *   3. Map each row to the same shape used in src/data/products.json:
 *      { id, name, category, description, priceRange, status, image }.
 *   4. Write the merged list back to src/data/products.json.
 *   5. Wire this script into a scheduled job (e.g. a GitHub Action on a
 *      timer, or a button in the Sheet itself) so publishing a new row
 *      triggers a fresh site deploy automatically.
 *
 * Until this is built, edit src/data/products.json directly (or ask
 * Claude to do it for you) to add, remove or update pieces.
 */

console.log(
  'sync-sheet.mjs is a placeholder — see the comment at the top of this file for the plan. ' +
    'src/data/products.json is still hand-edited for now.'
);
