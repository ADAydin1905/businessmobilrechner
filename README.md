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
| `github-config.js` | owner/repo/branch für das „Live speichern" des Admin-Panels |

## Einrichtung des Live-Speicherns

1. In `github-config.js` `owner` und `repo` eintragen (Branch meist `main`).
2. Auf GitHub ein **Personal Access Token** erstellen:
   - Empfohlen: **Fine-grained token**, nur dieses Repo, Recht
     **Contents: Read and write**.
   - Alternativ: klassisches Token mit Scope **repo**.
3. Fertig. Das Token wird **nicht** im Code gespeichert.

## Daten ändern (live)

1. Rechner mit `?admin` in der URL öffnen → Admin-Panel.
2. Änderungen vornehmen → **🚀 Live speichern**.
3. Beim ersten Mal das GitHub-Token eingeben (bleibt nur für die Sitzung im
   `sessionStorage`).
4. Das Panel committet `tarife.json` + `tarife.js` (und ggf. `rabatte.*`)
   direkt ins Repo. GitHub Pages baut neu → nach ~1 Min ist es live.

> **Fallback ohne Token:** Button **⬇️ Download** lädt die Dateien lokal
> herunter; diese dann manuell ins Repo committen.

> ⚠️ **Sicherheit:** Wer ein gültiges Token + Zugriff auf das Admin-Panel hat,
> schreibt direkt live (kein Review). Das Repo ist öffentlich, also niemals ein
> Token in den Code committen.

## Hinweise

- Externe Libs (jsPDF, html2canvas, Sortable) kommen per CDN → Internet nötig.
- Bei einem kostenlosen Account ist das Repo öffentlich; die Tarif-/Rabattdaten
  sind damit öffentlich sichtbar. Für sensible Daten: privates Repo (GitHub Pro)
  oder späterer Umzug auf AWS.
