# Business Mobil Rechner (BETA)

Statischer Tarif-/Rabattrechner für Telekom Business Mobil. Rein client-seitig
(HTML + JS + JSON), kein Server, kein Build-Schritt.

## Hosting (GitHub Pages – kostenlos)

1. Repo bei GitHub anlegen und diese Dateien pushen.
2. **Settings → Pages → Source:** Branch `main`, Ordner `/ (root)`.
3. Nach ~1 Minute erreichbar unter `https://<user>.github.io/<repo>/`.

`index.html` ist die Startseite und wird automatisch geladen.

## Dateien

| Datei              | Zweck                                                        |
|--------------------|-------------------------------------------------------------|
| `index.html`       | Die komplette App (Rechner + Admin-Panel)                   |
| `tarife.js`        | Tarifdaten als globale Variable (für `file://`-Nutzung)     |
| `tarife.json`      | Identische Tarifdaten, werden per `fetch` über http(s) geladen |
| `rabatte.js`       | Rabattdaten als globale Variable                            |
| `rabatte.json`     | Identische Rabattdaten per `fetch`                          |
| `gitlab-config.js` | Stub – verhindert 404. Live-Speichern ist auf Pages inaktiv |

## Daten ändern

Auf einem statischen Host gibt es kein Live-Speichern. Workflow:

1. Im Admin-Panel Änderungen vornehmen und die Dateien **herunterladen**.
2. Heruntergeladene `tarife.json` **und** `tarife.js` (bzw. `rabatte.*`) ins
   Repo committen und pushen.
3. Pages aktualisiert sich automatisch.

## Hinweise

- Externe Libs (jsPDF, html2canvas, Sortable) kommen per CDN → Internet nötig.
- Bei einem kostenlosen Account ist das Repo öffentlich; die Tarif-/Rabattdaten
  sind damit öffentlich sichtbar. Für sensible Daten: privates Repo (GitHub Pro)
  oder späterer Umzug auf AWS.
