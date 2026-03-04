# Architektur & Funktionsdokumentation

## Übersicht

Der Buchstabier-Trainer ist eine mobile-first, statische Single-Page-Application (SPA) ohne Backend. Alle Daten werden ausschließlich im Browser gespeichert (localStorage, optional sessionStorage für Session-Zustand). Die App unterstützt den Dialog zwischen Eltern und Kind - Eltern bedienen die App, das Kind schaut zu und buchstabiert laut.

## Zielgruppe und Leitprinzipien

### Zielgruppe
- **Primäre Nutzer**: Eltern + Grundschulkinder (Klasse 1–4)
- **Interaktionsmodell**: Eltern führen durch die Übung, Kind antwortet mündlich
- **Design-Philosophie**: Die App darf das Kind nicht überfordern
  - Große Schrift
  - Klare Buttons
  - Wenige Elemente
  - Kurze Texte

### Mobile-First Design
- Layout primär für Smartphone optimiert
- Skalierbar für Tablet/Desktop
- Offline-fähig im Sinne "läuft ohne Server"
- Kein Service Worker erforderlich (aber möglich)

## Datenhaltung und Persistenz

### Speicherorte

#### localStorage
- **Einstellungen**: Klassenstufe, Sessiongröße, UI-Optionen
- **Wiederhol-Wörter**: Markierte Wörter ("beim nächsten Mal wiederholen")
- **Statistiken**: Optional, falls implementiert
- **Letzter Zustand**: Zuletzt gewählte Klasse

#### sessionStorage (optional)
- Session-Zustand während laufender Übung
- Temporäre Daten, die nicht persistiert werden müssen

### Datenstrukturen

#### Einstellungen (buchtabieren_settings)
```javascript
{
  grade: 1-4,           // Klassenstufe
  sessionSize: 4-10     // Anzahl Wörter pro Session
}
```

#### Wiederhol-Wörter (buchtabieren_repeat)
```javascript
["Wort1", "Wort2", ...]  // Array von markierten Wörtern
```

## Share-Link Funktionalität

### Konzept
Ein Button "Auf einem anderen Gerät weitermachen" generiert einen Share-Link, der alle relevanten Einstellungen enthält.

### Implementierung

#### Link-Format
- URL mit Hash-Parameter: `#state=...`
- Base64-Encoding für robuste Übertragung
- Kodierte Daten:
  - Gewählte Klassenstufe (1–4)
  - Sessiongröße (4–10)
  - Wiederhol-Liste (markierte Wörter)
  - UI-Optionen (falls vorhanden)

#### Encoding/Decoding
```javascript
// Encoding
const state = {
  grade: this.currentGrade,
  sessionSize: this.sessionSize,
  repeatWords: [...this.repeatWords]
};
const encoded = btoa(encodeURIComponent(JSON.stringify(state)));
const shareUrl = `${window.location.origin}${window.location.pathname}#${encoded}`;

// Decoding
const hash = window.location.hash.substring(1);
const decoded = decodeURIComponent(atob(hash));
const state = JSON.parse(decoded);
```

#### Validierung
- Fallback auf Default-Werte bei ungültigem Link
- Prüfung auf gültige Wertebereiche
- Fehlerbehandlung bei Parsing-Fehlern

#### UX
- Link anzeigen + Copy-Button (Clipboard API)
- Optional: System-Share auf Mobilgeräten
- Modal-Dialog für bessere Übersicht

## Wortschatz / Inhalte

### Wortlisten

#### Struktur
- Pro Klassenstufe eine feste, interne Wortliste
- Deutsche Wörter, altersgerecht
- Keine eigenen Wortlisten, keine Uploads
- Wortlisten sind in separater Datei `wordlists.js` organisiert für bessere Wartbarkeit

#### Umfang
- **Klasse 1**: 189 Wörter
- **Klasse 2**: 292 Wörter
- **Klasse 3**: 301 Wörter
- **Klasse 4**: 301 Wörter

#### Datenquelle
- Wortlisten werden aus CSV-Dateien (`wortschatz/grundwortschatz_klassen_1-4.csv`) generiert
- Kombinierte Wörter (z.B. "BrückeProjekt") werden automatisch aufgeteilt
- Aktualisierung der Wortlisten erfolgt durch Regenerierung von `wordlists.js` aus CSV-Daten

#### Wortarten
- **Nomen (Substantive)**: Großgeschrieben
- **Verben**: Kleingeschrieben
- **Adjektive**: Kleingeschrieben

#### Auswahl
- Wörter werden randomisiert pro Session ausgewählt
- Keine Duplikate innerhalb einer Session
- Wiederhol-Wörter haben Priorität

### Ablenkungsfragen

#### Implementierung
- Feste Liste von 110 kindgerechten Ablenkungsfragen
- Zufällige Auswahl pro Wort
- Beim erneuten Anzeigen kann neue Frage gewählt werden

#### Beispiel-Fragen
- "Welche Farbe haben deine Socken?"
- "Was hast du heute gegessen?"
- "Welches Tier magst du?"
- etc.

## Session-Konzept

### Definition
Eine Session besteht aus einstellbar 4–10 Wörtern (Standard: 5).

### Session-Abschluss
Session ist "abgeschlossen", wenn die Zielanzahl korrekt "durchgearbeitet" wurde.

### Wiederhol-Wörter Integration

#### Regel
- Wörter, die als "beim nächsten Mal wiederholen" markiert sind, müssen in der nächsten Session garantiert mindestens einmal vorkommen
- Sessiongröße bleibt konstant (4–10)
- Wiederhol-Wörter haben Priorität bei der Auswahl

#### Algorithmus
```javascript
createSession() {
  1. Hole alle markierten Wiederhol-Wörter der gewählten Klassenstufe
  2. Sessiongröße N = 4–10
  3. Fülle Sessionliste:
     - Zuerst Wiederhol-Wörter (max N)
     - Restplätze mit zufälligen Wörtern aus der Klassenliste
     - Keine Duplikate innerhalb der Session
  4. Zufällige Reihenfolge innerhalb der Session
}
```

#### Priorisierung
- Wenn zu viele Wiederhol-Wörter existieren: Erste N werden verwendet
- Rest rutscht in spätere Sessions
- Erst wenn Markierung manuell entfernt wird, wird das Wort nicht mehr automatisch erzwungen

## Startscreen / Anleitung

### Funktion
Beim ersten Start (und über ein Info-Menü jederzeit erreichbar) wird eine kurze Anleitung gezeigt.

### Inhalte
1. Eltern zeigen dem Kind das Wort
2. Auf das Wort tippen um es zu verdecken
3. Kind liest/erkennt und buchstabiert laut
4. Eltern nutzen die Info-Box als Leitfaden
5. Eltern bewerten manuell richtig/falsch

### Leitfaden für Eltern
Die Info-Box enthält strukturierte Checkliste:
- Groß/Klein (Hinweis: Substantiv/Verb/Adjektiv)
- Buchstabiere das Wort
- Ablenkungsfrage
- Buchstabiere das Wort nochmal
- Bist du sicher?

## Hauptscreen: Wortkarte mit Flip-Animation

### Wortanzeige

#### Vorderseite
- Genau ein Wort groß angezeigt
- Sehr große Schrift für gute Lesbarkeit
- Zentriert auf der Karte

#### Rückseite
- Info-Box für Eltern mit strukturierter Checkliste
- Klare Liste/Box mit allen Anweisungen

### Flip-Animation

#### Technische Umsetzung
- CSS 3D-Transformationen (`transform: rotateY()`)
- `perspective` für 3D-Effekt
- `backface-visibility: hidden` für saubere Umschaltung
- Transition-Dauer: 0.5s (500ms) für flüssige Animation

#### Interaktion
- Tap auf Wort → Karte flippt
- Rückseite zeigt Info-Box
- Erneuter Tap → Karte flippt zurück

### Info-Box Inhalte (Rückseite)

#### Strukturierte Checkliste
1. **Groß oder klein?**
   - Automatische Erkennung basierend auf Groß-/Kleinschreibung
   - Hinweis auf Wortart (Substantiv/Verb/Adjektiv)

2. **Buchstabiere das Wort**
   - Einfache Anweisung

3. **Ablenkungsfrage**
   - Format: "Ablenkungsfrage: (z.B. [Frage])"
   - Zufällige Auswahl aus 110 Fragen
   - Wird dynamisch eingefügt

4. **Buchstabiere das Wort nochmal**
   - Wiederholung zur Festigung

5. **Bist du sicher?**
   - Immer angezeigt (nicht mehr optional)

#### Wichtig
- Die App bewertet **nicht automatisch** die Buchstabierung
- Eltern entscheiden manuell über richtig/falsch

## Ablauf pro Wort (Elternsteuerung)

### Zyklus

1. **Wort anzeigen** (Vorderseite)
   - Großes Wort wird gezeigt
   - Kind sieht das Wort

2. **Kind buchstabiert** (mündlich)
   - Kind liest/erkennt und buchstabiert laut
   - Keine Eingabe in der App

3. **Eltern tippen auf Wort**
   - Karte flippt → Eltern sehen Info-Box
   - Eltern führen ggf. Schritte 1–5 durch

4. **Eltern entscheiden Ergebnis**

   **Buttons:**
   - **"Nächstes Wort"** (entspricht korrekt)
     - Zufälliges nächstes Wort aus Session-Pool anzeigen
     - Fortschritt zur nächsten Position
   
   - **"Wort nochmal anzeigen"** (entspricht falsch oder unsicher)
     - Dasselbe Wort erneut anzeigen (Vorderseite)
     - Ablauf startet von vorn
     - Kein Fortschritt in der Session

### Verhalten

#### "Nächstes Wort"
- Geht zum nächsten Wort in der Sessionliste
- Session-Fortschritt wird erhöht
- Wenn letztes Wort erreicht → Session-Ende

#### "Wort nochmal anzeigen"
- Zeigt dasselbe Wort erneut
- Karte wird zurückgesetzt (Vorderseite)
- Kein Fortschritt in der Session
- Ablauf kann komplett wiederholt werden

## Markierung "beim nächsten Mal wiederholen"

### Funktion
Für jedes Wort gibt es eine Markierung, die Eltern setzen/entfernen können.

### Implementierung

#### UI-Element
- Button unterhalb von "Nächstes Wort"
- Text: "Beim nächsten Mal wiederholen" / "Beim nächsten Mal wiederholen ✅"
- Toggle-Funktionalität

#### Verhalten
- **Markiert**: Button zeigt ✅, Wort wird in nächster Session garantiert eingebaut
- **Nicht markiert**: Button ohne ✅, Wort wird normal behandelt
- **Toggle**: Klick auf Button schaltet Markierung um

#### Persistenz
- Markierung bleibt persistent (localStorage)
- Wird im Share-Link mitgenommen (wenn möglich)
- Bleibt erhalten über Sessions hinweg

#### Sichtbarkeit
- Aktueller Status ist immer sichtbar (Button-Text mit/ohne ✅)
- Separate Übersicht optional, aber nicht erforderlich

## Einstellungen (Elternbereich)

### UI-Design
- Simpel, mobile-geeignet
- Große Touch-Ziele
- Klare Struktur

### Einstellungsoptionen

#### Klassenstufe
- Auswahl: 1 / 2 / 3 / 4
- Dropdown-Menü
- Standard: 1

#### Sessiongröße
- Slider: 4 / 5 / 6 / 7 / 8 / 9 / 10
- Live-Anzeige des aktuellen Werts
- Standard: 5

### Buttons

#### "Neue Session starten"
- Setzt Session-Fortschritt zurück
- Wählt neue Wörter
- Berücksichtigt Wiederhol-Markierungen

#### "Auf anderem Gerät weitermachen"
- Generiert Share-Link
- Öffnet Modal mit Link und Copy-Button

#### "Speichern"
- Speichert alle Einstellungen
- Kehrt zur Startseite zurück

## Session-Logik (Auswahl der Wörter)

### Beim Start einer neuen Session

#### Algorithmus
```javascript
1. Hole alle markierten Wiederhol-Wörter der gewählten Klassenstufe
2. Sessiongröße N = 4–10 (aus Einstellungen)
3. Fülle Sessionliste:
   a. Zuerst Wiederhol-Wörter (max N)
   b. Restplätze mit zufälligen Wörtern aus der Klassenliste
   c. Keine Duplikate innerhalb der Session
4. Zufällige Reihenfolge innerhalb der Session
```

#### Priorisierung
- Wiederhol-Wörter haben höchste Priorität
- Wenn mehr Wiederhol-Wörter als Sessiongröße: Erste N werden verwendet
- Rest wird in späteren Sessions verwendet

### Innerhalb der Session

#### Reihenfolge
- Zufällig gemischt
- Keine feste Reihenfolge

#### Verhalten bei Aktionen
- **"Wort nochmal anzeigen"**: Zeigt dasselbe Wort erneut (kein Fortschritt)
- **"Nächstes Wort"**: Geht zum nächsten Wort in der Sessionliste

### Session-Ende

#### Trigger
- Wenn letztes Wort erfolgreich buchstabiert wurde
- `currentWordIndex >= sessionWords.length`

#### Abschluss-Screen
- Kurzes Abschluss-Screen ("Session fertig")
- Konfetti-Animation
- Button "Neue Session starten"
- Button "Zur Startseite"

## UI/UX Anforderungen

### Mobile-First Design

#### Touch-Ziele
- Große Touch-Ziele (mindestens 48px)
- 1-Hand-Bedienung möglich
- Klare Abstände zwischen Elementen

#### Typografie
- Große, gut lesbare Schrift
- Hoher Kontrast
- Klare Hierarchie

### Flip-Animation

#### Anforderungen
- Flüssig, nicht zu langsam
- Keine Übelkeit (kurz, ca. 300–500ms)
- Aktuell: 500ms Transition

#### Implementierung
- CSS `transform: rotateY(180deg)`
- `transition: transform 0.5s`
- `transform-style: preserve-3d`

### Barrierefreiheit

#### Design-Prinzipien
- Hoher Kontrast
- Große Schrift
- Keine winzigen Controls
- Klare Struktur

#### Interaktion
- Keine Tastatureingaben notwendig
- Alle Funktionen per Touch/Tap
- Klare Button-Labels

### Zustandsanzeige

#### Klarheit
- Vorderseite vs. Rückseite klar erkennbar
- Session-Fortschritt sichtbar ("Wort X von Y")
- Button-Zustände klar (mit/ohne ✅)

## Technische Architektur

### Statische SPA

#### Struktur
- Eine HTML-Datei (`index.html`)
- Eine CSS-Datei (`styles.css`)
- Zwei JavaScript-Dateien:
  - `wordlists.js`: Enthält die Wortlisten-Konstante `WORD_LISTS` für alle Klassenstufen
  - `app.js`: Hauptanwendungslogik
- Dokumentation im `docs/` Ordner
- Keine externen Abhängigkeiten

#### Datei-Ladereihenfolge
Die JavaScript-Dateien müssen in folgender Reihenfolge geladen werden:
1. `wordlists.js` - Definiert die globale `WORD_LISTS` Konstante
2. `app.js` - Verwendet `WORD_LISTS` für die Session-Erstellung

#### Keine Server-Abhängigkeiten
- Keine externen Datenquellen
- Keine Server-Calls
- Vollständig offline-fähig

### State-Management

#### App-State
```javascript
const app = {
  currentGrade: 1,              // Aktuelle Klassenstufe
  sessionSize: 5,               // Sessiongröße
  currentWordIndex: 0,          // Aktueller Index in Session
  repeatWords: new Set(),       // Wiederhol-Wörter (persistent)
  sessionWords: [],             // Wörter der aktuellen Session
  sessionRepeatWords: new Set() // Wiederhol-Wörter in aktueller Session
}
```

#### State-Flow
1. **Initialisierung**: `init()` lädt Einstellungen und Wiederhol-Wörter
2. **Session-Start**: `createSession()` erstellt neue Session
3. **Wort-Anzeige**: `showWord()` zeigt aktuelles Wort
4. **Interaktionen**: Buttons aktualisieren State
5. **Persistenz**: State wird bei Änderungen gespeichert

### Persistenz-Schicht

#### localStorage API
- `getItem(key)`: Lädt gespeicherte Daten
- `setItem(key, value)`: Speichert Daten
- JSON-Serialisierung für komplexe Daten

#### Speicher-Keys
- `buchtabieren_settings`: Einstellungen
- `buchtabieren_repeat`: Wiederhol-Wörter

### Event-Handling

#### Event-Typen
- `click`: Button-Klicks
- `input`: Slider-Änderungen
- `change`: Dropdown-Änderungen
- `DOMContentLoaded`: Initialisierung

#### Event-Delegation
- Direkte Event-Listener auf Elemente
- Inline `onclick`-Handler für einfache Aktionen

### Rendering

#### Screen-Management
- Alle Screens als `<div class="screen">`
- Nur aktiver Screen hat Klasse `active`
- CSS `display: none` für inaktive Screens

#### Dynamische Updates
- DOM-Manipulation für Wort-Anzeige
- Dynamische Button-Texte
- Live-Updates bei Slider-Änderungen

## Komponenten-Architektur

### Screen-Komponenten

#### Startscreen (`startScreen`)
- Anleitung
- Button "Los geht's!"
- Button "Einstellungen"

#### Einstellungen (`settingsScreen`)
- Klassenstufe-Auswahl
- Sessiongröße-Slider
- Share-Link-Button
- Speichern-Button

#### Wort-Screen (`wordScreen`)
- Session-Fortschritt
- Wortkarte (flip-fähig)
- Action-Buttons

#### End-Screen (`endScreen`)
- Abschluss-Meldung
- Konfetti-Animation
- Neue Session-Button

### Modal-Komponenten

#### Share-Modal (`shareModal`)
- Link-Anzeige
- Copy-Button
- Schließen-Button

### Karten-Komponente

#### Wortkarte (`wordCard`)
- Vorderseite: Wort-Anzeige
- Rückseite: Info-Box
- Flip-Animation

## CSS-Architektur

### Design-System

#### Farben (CSS-Variablen)
```css
--primary-color: #4A90E2
--success-color: #5CB85C
--warning-color: #F0AD4E
--text-color: #333
--bg-color: #F5F5F5
--card-bg: #FFFFFF
```

#### Typografie
- System-Font-Stack für native Performance
- Responsive Schriftgrößen
- Klare Hierarchie

#### Spacing
- Konsistente Abstände
- Mobile-optimierte Padding-Werte

### Responsive Design

#### Breakpoints
- Mobile: < 768px (Standard)
- Tablet: >= 768px
- Desktop: >= 1024px

#### Anpassungen
- Schriftgrößen skalieren
- Layout-Anpassungen für größere Screens
- Optimierte Button-Größen

### Animationen

#### Flip-Animation
- CSS 3D-Transformationen
- Smooth Transitions

#### Konfetti-Animation
- CSS Keyframes
- JavaScript-generierte Elemente
- Zufällige Positionen und Timing

## JavaScript-Architektur

### Modul-Struktur

#### Datei-Organisation
- **`wordlists.js`**: Enthält die `WORD_LISTS` Konstante mit allen Wortlisten für Klassen 1-4
- **`app.js`**: Enthält die Hauptanwendungslogik

#### Konstanten
- `WORD_LISTS` (in `wordlists.js`): Wortlisten pro Klasse, als globale Konstante verfügbar
- `DISTRACTION_QUESTIONS` (in `app.js`): Ablenkungsfragen
- `REPEAT_BUTTON_TEXT` (in `app.js`): Button-Texte

#### App-Objekt
- Zentrale State-Verwaltung
- Alle Funktionen als Methoden
- Initialisierung beim DOM-Ready

### Funktionen-Gruppierung

#### Initialisierung
- `init()`: Haupt-Initialisierung
- `setupEventListeners()`: Event-Handler
- `loadSettings()`: Einstellungen laden
- `loadRepeatWords()`: Wiederhol-Wörter laden

#### Screen-Management
- `showStartScreen()`: Start-Screen anzeigen
- `showSettings()`: Einstellungen anzeigen
- `hideAllScreens()`: Alle Screens verstecken

#### Session-Management
- `startSession()`: Session starten
- `createSession()`: Session erstellen
- `endSession()`: Session beenden
- `newSession()`: Neue Session starten

#### Wort-Management
- `showWord()`: Wort anzeigen
- `nextWord()`: Nächstes Wort
- `repeatWord()`: Wort wiederholen
- `updateInfoBox()`: Info-Box aktualisieren

#### Karten-Interaktion
- `flipCard()`: Karte umdrehen

#### Wiederhol-Funktion
- `toggleRepeat()`: Wiederhol-Markierung umschalten

#### Persistenz
- `saveSettings()`: Einstellungen speichern
- `saveRepeatWords()`: Wiederhol-Wörter speichern

#### Share-Funktionalität
- `shareLink()`: Share-Link generieren
- `checkShareLink()`: Share-Link beim Laden prüfen
- `copyLink()`: Link kopieren
- `closeShareModal()`: Modal schließen

#### Utilities
- `shuffleArray()`: Array zufällig mischen
- `showConfetti()`: Konfetti-Animation

## Datenfluss

### Session-Erstellung
```
User klickt "Los geht's!"
  ↓
startSession()
  ↓
createSession()
  ↓
  - Hole Wiederhol-Wörter
  - Fülle mit zufälligen Wörtern
  - Mische Reihenfolge
  ↓
showWord()
  ↓
  - Zeige Wort
  - Aktualisiere Info-Box
  - Setze Button-Status
```

### Wort-Interaktion
```
User tippt auf Wort
  ↓
flipCard()
  ↓
  - Karte flippt
  - Info-Box wird sichtbar
```

```
User klickt "Nächstes Wort"
  ↓
nextWord()
  ↓
  - currentWordIndex++
  ↓
showWord()
  ↓
  - Neues Wort anzeigen
```

### Wiederhol-Markierung
```
User klickt "Beim nächsten Mal wiederholen"
  ↓
repeatWord()
  ↓
  - Prüfe aktuellen Status
  - Toggle Markierung
  - Aktualisiere Button-Text
  - Speichere in localStorage
```

## Fehlerbehandlung

### Validierung

#### Share-Link
- Try-Catch bei Decoding
- Fallback auf Default-Werte
- Validierung der Wertebereiche

#### Einstellungen
- Try-Catch beim Laden
- Fallback auf Standard-Werte
- Validierung der Eingaben

### Robustheit
- Prüfung auf Element-Existenz vor DOM-Zugriff
- Graceful Degradation bei fehlenden Features
- Konsistente Fehlerbehandlung

## Performance-Optimierungen

### Ladezeiten
- Minimale Dateigrößen
- Keine externen Ressourcen
- Optimierte CSS/JS

### Rendering
- Effiziente DOM-Manipulation
- Minimale Reflows/Repaints
- CSS-Animationen statt JavaScript

### Speicher
- Effiziente Datenstrukturen (Set für Wiederhol-Wörter)
- Minimale localStorage-Nutzung
- Keine Memory-Leaks

## Erweiterungsmöglichkeiten

### Potenzielle Features
- Statistiken (Erfolgsrate, häufigste Fehler)
- Eigene Wortlisten
- Multi-User-Unterstützung
- Service Worker für vollständige Offline-Funktionalität
- Druckfunktion für Wortlisten
- Export/Import von Einstellungen

### Technische Verbesserungen
- TypeScript für Type-Safety
- Framework-Integration (Vue/React)
- Unit-Tests
- E2E-Tests

## Zusammenfassung

Die App ist eine vollständig clientseitige, statische Single-Page-Application mit:
- Lokaler Datenspeicherung (localStorage)
- Mobile-First Design
- Flip-Karten-Animation
- Session-Management mit Wiederhol-Funktion
- Share-Link für Geräte-Übergreifende Nutzung
- Vollständig offline-fähig
- Keine externen Abhängigkeiten

Die Architektur ist einfach, wartbar und erweiterbar, während sie alle Anforderungen erfüllt.
