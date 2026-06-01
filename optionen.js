/*
 * optionen.js  -  Zubuchoptionen fuer den Business Mobil Rechner (v2.0)
 * Automatisch erzeugt vom Admin-Panel am 1.6.2026, 10:23:59
 * Inhalt identisch zu optionen.json. Beide Dateien nach GitHub committen.
 */
window.OPTIONEN_DATA = {
  "_meta": {
    "schemaVersion": "1.0",
    "appVersion": "2.0",
    "beschreibung": "Zubuchoptionen fuer den Business Mobil Rechner. Bearbeitbar ueber das Admin-Panel.",
    "stand": "2026-06-01",
    "felderProOption": {
      "name": "Anzeigename der Option",
      "preisNetto": "Standard-Monatspreis netto (Zahl; negativ = Rabatt/Vorteil)",
      "preisProStufe": "Optional: abweichender Preis je Tarifstufe, z.B. { \"XL\": 8.36 }",
      "berechnungsTyp": "Optional: vorteil | prozentual_zeitlich | manuell_zeitlich | aktionspreis_zeitlich | festpreis_aktion",
      "prozent": "Optional: Rabatt in Prozent (bei prozentual_zeitlich)",
      "dauerMonate": "Optional: Laufzeit in Monaten (bei zeitlichen Aktionen)",
      "regeln": "Verfuegbarkeits-Regeln (kartenArten, stufenIncl, stufenExcl, nameExcl, nameExclEnd, nameInclStart, erfordertHauptkartenOption)"
    }
  },
  "optionen": {
    "mobilityConnect": {
      "name": "Mobility Connect",
      "preisNetto": 9.99
    },
    "securityOnNetComfort": {
      "name": "Security OnNet Comfort",
      "preisNetto": 3.32,
      "regeln": {
        "nameExcl": [
          "Special"
        ]
      }
    },
    "festeIPv6Adresse": {
      "name": "Feste-IPv6-Adresse",
      "preisNetto": 4.16
    },
    "internationalWorld50": {
      "name": "International World 50",
      "preisNetto": 8.36
    },
    "internationalWorld100": {
      "name": "International World 100",
      "preisNetto": 16.76
    },
    "internationalWorld400": {
      "name": "International World 400",
      "preisNetto": 33.57
    },
    "countryFlatWorld": {
      "name": "CountryFlat World",
      "preisNetto": 75.62
    },
    "magentaEinsVorteil": {
      "name": "Magenta 1 Business Vorteil",
      "preisNetto": -5,
      "berechnungsTyp": "vorteil",
      "regeln": {
        "kartenArten": [
          "Hauptkarte"
        ],
        "stufenExcl": [
          "XS"
        ]
      }
    },
    "oneNumber": {
      "name": "OneNumber",
      "preisNetto": 8.36
    },
    "festnetznummer": {
      "name": "Festnetznummer",
      "preisNetto": 4.16,
      "preisProStufe": {
        "XL": 8.36,
        "XXL": 8.36
      }
    },
    "halbesJahrhalberPreis": {
      "name": "6 Monate 50% Rabatt",
      "berechnungsTyp": "prozentual_zeitlich",
      "prozent": 50,
      "dauerMonate": 6,
      "regeln": {
        "kartenArten": [
          "Hauptkarte"
        ],
        "stufenExcl": [
          "XS"
        ],
        "nameExclEnd": [
          " Premium"
        ]
      }
    },
    "dataunlimitedforfree": {
      "name": "Data Plus Unlimited",
      "preisNetto": 0,
      "regeln": {
        "kartenArten": [
          "Hauptkarte",
          "Partnerkarte"
        ],
        "stufenIncl": [
          "M"
        ],
        "erfordertHauptkartenOption": "dataunlimitedforfree"
      }
    },
    "vvlAktion": {
      "name": "Rabatt aus BSP / Carmen / MaVi (Abzug vom Grundpreis vor RV-Rabatt)",
      "berechnungsTyp": "manuell_zeitlich",
      "regeln": {
        "kartenArten": [
          "Hauptkarte"
        ]
      }
    },
    "aktionspreisHK": {
      "name": "Aktionspreis aus BSP / Carmen / MaVi (Endpreis nach Abzug von RV-Rabatt)",
      "berechnungsTyp": "aktionspreis_zeitlich",
      "regeln": {
        "kartenArten": [
          "Hauptkarte"
        ]
      }
    },
    "aktionspreisBusinessCardSpecial": {
      "name": "Aktionspreis Business Card Special",
      "berechnungsTyp": "festpreis_aktion",
      "regeln": {
        "nameInclStart": [
          "Business Card Special"
        ]
      }
    }
  }
};
