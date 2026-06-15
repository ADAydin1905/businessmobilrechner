/*
 * rabatte.js  -  Mitarbeiter-/BGE-Rabatte fuer den Business Mobil Rechner (v2.0)
 * Automatisch erzeugt vom Admin-Panel am 15.6.2026, 10:18:03
 * Einzige Rabattdaten-Quelle (per <script> geladen). Vom Admin-Panel erzeugt.
 */
window.RABATTE_DATA = {
  "_meta": {
    "schemaVersion": "1.0",
    "appVersion": "2.0",
    "beschreibung": "Mitarbeiter-/BGE-Rabatte fuer Business Mobil Rechner. Bearbeitbar ueber das Admin-Panel.",
    "stand": "2026-06-15",
    "felder": {
      "rahmenvertragsRabatte": "Liste der waehlbaren festen Rahmenvertrags-Rabatte in Prozent (Zahlen, sortiert aufsteigend, 0 immer enthalten)",
      "bereitstellungsPreise": "Liste der waehlbaren Bereitstellungspreise (netto, in EUR) fuer die Bereitstellungs-Dropdowns",
      "mitarbeiterRabatte": "Objekt: Tarifname -> Rabatt in Prozent (tarifspezifisch)",
      "partnerkartenRabattRegeln": "Sortierte Regeln fuer automatische Partnerkarten-Rabatte pro Hauptkarten-Gruppe"
    }
  },
  "rahmenvertragsRabatte": [
    0,
    5,
    7.5,
    8,
    10,
    15,
    18,
    20,
    25
  ],
  "bereitstellungsPreise": [
    8.36,
    16.76,
    25.17,
    33.57
  ],
  "mitarbeiterRabatte": {
    "Business Mobil XS eco": 42.935,
    "Business Mobil XS mit Handy": 33.3598,
    "Business Mobil XS mit Top Handy": 27.3062,
    "Business Mobil S eco": 33.3648,
    "Business Mobil S mit Handy": 27.3032,
    "Business Mobil S mit Top Handy": 23.0949,
    "Business Mobil M eco": 27.3032,
    "Business Mobil M mit Handy": 23.0949,
    "Business Mobil M mit Top Handy": 20.0092,
    "Business Mobil L eco": 28.59,
    "Business Mobil L mit Handy": 25.0101,
    "Business Mobil L mit Top Handy": 22.2364,
    "Business Mobil XL eco": 26.3297,
    "Business Mobil XL mit Handy": 23.818,
    "Business Mobil XL mit Top Handy": 21.7513,
    "Business Mobil Data S eco": 20,
    "Business Mobil Data S mit Gerät": 20,
    "Business Mobil Data S mit Premium-Gerät": 20,
    "Business Mobil Data M eco": 20,
    "Business Mobil Data M mit Gerät": 20,
    "Business Mobil Data M mit Premium-Gerät": 20,
    "Business Mobil Data L eco": 20,
    "Business Mobil Data L mit Gerät": 20,
    "Business Mobil Data L mit Premium-Gerät": 20,
    "CombiCard Business Mobil Data S eco": 20,
    "CombiCard Business Mobil Data S mit Gerät": 20,
    "CombiCard Business Mobil Data S mit Premium-Gerät": 20,
    "CombiCard Business Mobil Data M eco": 20,
    "CombiCard Business Mobil Data M mit Gerät": 20,
    "CombiCard Business Mobil Data M mit Premium-Gerät": 20,
    "CombiCard Business Mobil Data L eco": 20,
    "CombiCard Business Mobil Data L mit Gerät": 20,
    "CombiCard Business Mobil Data L mit Premium-Gerät": 20
  },
  "partnerkartenRabattRegeln": [
    {
      "id": "business_cards_erste_partnerkarte",
      "name": "Business Cards: 1. Partnerkarte",
      "aktiv": true,
      "kartenArt": "Partnerkarte",
      "tarifGruppen": [
        "partnerkarte"
      ],
      "familien": [],
      "stufen": [],
      "position": {
        "operator": "gte",
        "value": 1
      },
      "gruppenAnzahl": {
        "operator": "any"
      },
      "aktion": {
        "typ": "set",
        "wert": 50
      }
    },
    {
      "id": "business_cards_ab_zweiter_partnerkarte",
      "name": "Business Cards: ab 2. Partnerkarte",
      "aktiv": true,
      "kartenArt": "Partnerkarte",
      "tarifGruppen": [
        "partnerkarte"
      ],
      "familien": [
        "Business Card M",
        "Business Card L",
        "Business Card XL"
      ],
      "stufen": [
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "position": {
        "operator": "gte",
        "value": 2
      },
      "gruppenAnzahl": {
        "operator": "any"
      },
      "aktion": {
        "typ": "set",
        "wert": 70
      }
    }
  ]
};
