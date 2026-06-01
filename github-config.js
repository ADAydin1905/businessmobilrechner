/* ---------------------------------------------------------------------------
 * github-config.js  -  GitHub-Konfiguration fuer das Admin-Panel "Live speichern"
 *
 * Das Admin-Panel committet geaenderte Tarif-/Rabattdateien direkt ueber die
 * GitHub Contents API in dieses Repository. GitHub Pages baut danach
 * automatisch neu -> die Aenderungen gehen live (i.d.R. nach ~1 Minute).
 *
 * WICHTIG:
 *  - Hier KEIN Token eintragen! Das Token wird zur Laufzeit abgefragt und nur
 *    in der Browser-Sitzung (sessionStorage) gehalten. Diese Datei ist im
 *    oeffentlichen Repo fuer jeden sichtbar.
 *  - owner + repo + branch unten ausfuellen.
 * ------------------------------------------------------------------------- */
window.GITHUB_CONFIG = {
  // GitHub-Benutzername oder Organisation, z.B. "devrim-aydin"
  owner: "ADAydin1905",

  // Repository-Name, z.B. "business-mobil-rechner"
  repo: "businessmobilrechner",

  // Branch, in den committet wird (bei GitHub Pages meist "main")
  branch: "main",

  // Optional: Unterordner im Repo, falls die Dateien nicht im Wurzelverzeichnis
  // liegen. Mit abschliessendem "/", z.B. "app/". Leer lassen = Wurzel.
  filePrefix: "",

  // Optional: API-Basis-URL. Nur fuer GitHub Enterprise aendern.
  apiUrl: "https://api.github.com",

  // Optional: Wer als Autor des Commits erscheint. Beide Felder ausfuellen,
  // sonst wird der Besitzer des Tokens verwendet.
  committerName: "",
  committerEmail: "",
};
