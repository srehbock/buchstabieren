# Buchstabier-Trainer

Eine mobile-first, statische Web-App für Eltern und Grundschulkinder zum Üben des Buchstabierens. Die App unterstützt den Dialog zwischen Eltern und Kind - Eltern bedienen die App, das Kind schaut zu und buchstabiert laut.

## 🎯 Zielgruppe

- Eltern mit Grundschulkindern (Klasse 1-4)
- Eltern führen durch die Übung, Kind antwortet mündlich
- Mobile-first Design für Smartphones, skalierbar für Tablet/Desktop

## ✨ Features

### Hauptfunktionen

- **Klassenstufen**: Unterstützung für Klasse 1-4 mit altersgerechten Wortlisten
  - Klasse 1: 200 Wörter (Nomen, Verben, Adjektive)
  - Klasse 2: 200 Wörter (Nomen, Verben, Adjektive)
  - Klasse 3: 300 Wörter (Nomen, Verben, Adjektive)
  - Klasse 4: 300 Wörter (Nomen, Verben, Adjektive)

- **Session-System**: 
  - Konfigurierbare Sessiongröße (4-10 Wörter, Standard: 5)
  - Zufällige Wortauswahl pro Session
  - Wiederhol-Wörter haben Priorität

- **Flip-Karte**: 
  - Vorderseite: Großes Wort für das Kind
  - Rückseite: Info-Box für Eltern mit strukturierter Checkliste
  - Flüssige Flip-Animation

- **Info-Box für Eltern**:
  - Groß oder klein? (Hinweis auf Wortart)
  - Buchstabiere das Wort
  - Ablenkungsfrage (110 verschiedene Fragen)
  - Buchstabiere das Wort nochmal
  - Bist du sicher?

- **Wiederhol-Funktion**:
  - Wörter können als "Beim nächsten Mal wiederholen" markiert werden
  - Markierte Wörter werden in der nächsten Session garantiert eingebaut
  - Persistente Speicherung im Browser

- **Share-Link**: 
  - Einstellungen und Wiederhol-Wörter auf andere Geräte übertragen
  - Einfaches Kopieren und Teilen

- **Konfetti-Animation**: 
  - Feiern des Session-Abschlusses

### Technische Features

- **Vollständig offline**: Läuft ohne Server, keine Internetverbindung nötig
- **localStorage**: Alle Daten werden lokal im Browser gespeichert
- **Mobile-First**: Optimiert für Smartphones mit großen Touch-Zielen
- **Barrierearm**: Hoher Kontrast, große Schrift, klare Bedienung

## 🚀 Installation & Nutzung

### Installation

1. Repository klonen oder Dateien herunterladen
2. Keine zusätzlichen Abhängigkeiten erforderlich - reine HTML/CSS/JavaScript App

### Nutzung

1. Öffne `public/index.html` in einem modernen Webbrowser
2. Die App läuft vollständig offline
3. Keine Installation oder Konfiguration nötig

### Erste Schritte

1. **Einstellungen vornehmen**:
   - Klassenstufe wählen (1-4)
   - Sessiongröße einstellen (4-10 Wörter)

2. **Session starten**:
   - Auf "Los geht's!" klicken
   - Wort wird groß angezeigt

3. **Übung durchführen**:
   - Kind liest/buchstabiert das Wort
   - Auf das Wort tippen → Karte flippt → Info-Box für Eltern erscheint
   - Eltern führen durch die Checkliste
   - Eltern bewerten: "Nächstes Wort" (korrekt) oder "Wort nochmal anzeigen" (wiederholen)

4. **Wiederhol-Wörter markieren**:
   - Button "Beim nächsten Mal wiederholen" unterhalb von "Nächstes Wort"
   - Markierte Wörter erscheinen automatisch in der nächsten Session

## 📁 Projektstruktur

```
buchtabieren/
├── public/              # Öffentliche App-Dateien
│   ├── index.html      # Haupt-HTML-Datei
│   ├── styles.css      # Mobile-first Styles
│   └── app.js          # Vollständige App-Logik
└── docs/               # Dokumentation
    ├── README.md       # Diese Datei
    └── ARCHITECTURE.md # Architektur-Dokumentation
```

## 🎮 Bedienung

### Startscreen
- Anleitung zur Nutzung
- Button "Los geht's!" zum Starten
- Button "Einstellungen" für Konfiguration

### Einstellungen
- **Klassenstufe**: Dropdown-Auswahl (1-4)
- **Sessiongröße**: Slider (4-10 Wörter)
- **Share-Link**: Einstellungen auf andere Geräte übertragen

### Wortkarte
- **Vorderseite**: Großes Wort für das Kind
- **Rückseite**: Info-Box mit Checkliste für Eltern
- **Tap auf Karte**: Flip-Animation zur Rückseite

### Action-Buttons
- **"Nächstes Wort"**: Wort war korrekt → nächstes Wort
- **"Beim nächsten Mal wiederholen"**: Wort markieren/entmarkieren

### Session-Ende
- Konfetti-Animation
- Option für neue Session
- Zurück zur Startseite

## 💾 Datenspeicherung

Alle Daten werden lokal im Browser gespeichert:

- **Einstellungen**: Klassenstufe, Sessiongröße
- **Wiederhol-Wörter**: Liste der markierten Wörter
- **Letzter Zustand**: Automatisches Speichern

### Share-Link

Der Share-Link kodiert:
- Gewählte Klassenstufe
- Sessiongröße
- Wiederhol-Wörter

Beim Öffnen des Links werden die Einstellungen automatisch übernommen.

## 🎨 Design-Prinzipien

- **Mobile-First**: Primär für Smartphones optimiert
- **Große Touch-Ziele**: Mindestens 48px für einfache Bedienung
- **Klare Typografie**: Große, gut lesbare Schrift
- **Hoher Kontrast**: Barrierearmes Design
- **Minimalistisch**: Wenige Elemente, klare Struktur

## 🔧 Technische Details

### Browser-Kompatibilität

- Moderne Browser (Chrome, Firefox, Safari, Edge)
- Unterstützt localStorage
- CSS3-Animationen

### Offline-Funktionalität

- Vollständig statische App
- Keine Server-Abhängigkeiten
- Keine externen Ressourcen

### Performance

- Schnelle Ladezeiten
- Keine externen Bibliotheken
- Optimierte Animationen

## 📝 Wortlisten

Die App enthält fest integrierte Wortlisten:

- **Klasse 1**: Einfache, kurze Wörter (Nomen, Verben, Adjektive)
- **Klasse 2**: Erweiterte Wortschätze
- **Klasse 3**: Komplexere Wörter
- **Klasse 4**: Anspruchsvolle Wörter

Alle Wörter sind altersgerecht und aus pädagogischen Quellen zusammengestellt.

## 🎯 Verwendung im Unterricht

Die App ist ideal für:
- Hausaufgabenbetreuung
- Übungsstunden zu Hause
- Individuelle Förderung
- Wiederholung von Lernwörtern

## 📱 Mobile Optimierung

- Touch-optimierte Bedienung
- Große Buttons für einfaches Tippen
- Responsive Design für verschiedene Bildschirmgrößen
- Einhand-Bedienung möglich

## 🔒 Datenschutz

- Alle Daten bleiben lokal im Browser
- Keine Übertragung an externe Server
- Keine Tracking-Mechanismen
- Vollständige Kontrolle über die Daten

## 🐛 Bekannte Einschränkungen

- Keine eigenen Wortlisten (nur vordefinierte Listen)
- Keine Statistiken über Erfolgsrate
- Keine Multi-User-Unterstützung

## 📄 Lizenz

Dieses Projekt ist für den privaten und pädagogischen Gebrauch bestimmt.

## 🤝 Beitragen

Verbesserungsvorschläge und Feedback sind willkommen!

## 📧 Support

Bei Fragen oder Problemen bitte ein Issue erstellen.

---

**Viel Erfolg beim Buchstabieren! 🎉**
