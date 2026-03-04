// Ablenkungsfragen
const DISTRACTION_QUESTIONS = [
    'Welche Farbe haben deine Socken?', 'Was hast du heute gegessen?', 'Welches Tier magst du?', 'Was ist deine Lieblingsfarbe?',
    'Welches Spiel spielst du gerne?', 'Was machst du am liebsten?', 'Welche Jahreszeit magst du?', 'Was ist dein Lieblingsessen?',
    'Welches Buch liest du gerne?', 'Was machst du in der Freizeit?', 'Welche Farbe hat dein Lieblingsshirt?', 'Was ist dein Lieblingstier?',
    'Welche Musik hörst du gerne?', 'Was ist dein Lieblingsgetränk?', 'Welche Sportart magst du?', 'Was ist dein Lieblingsfilm?',
    'Welche Süßigkeit magst du?', 'Was ist dein Lieblingsfach in der Schule?', 'Welches Hobby hast du?', 'Was ist dein Lieblingsplatz zu Hause?',
    'Welche Farbe hat dein Zimmer?', 'Was ist dein Lieblingswochentag?', 'Welche Blume magst du?', 'Was ist dein Lieblingswetter?',
    'Welches Auto magst du?', 'Was ist dein Lieblingsmonat?', 'Welche Zahl magst du?', 'Was ist dein Lieblingsbuch?',
    'Welches Gemüse magst du?', 'Was ist dein Lieblingsobst?', 'Welche Farbe hat dein Rucksack?', 'Was ist dein Lieblingsspielzeug?',
    'Welches Instrument magst du?', 'Was ist dein Lieblingslied?', 'Welche Farbe haben deine Augen?', 'Was ist dein Lieblingsname?',
    'Welches Land möchtest du besuchen?', 'Was ist dein Lieblingsfest?', 'Welche Farbe hat dein Bett?', 'Was ist dein Lieblingsmärchen?',
    'Welches Gericht magst du?', 'Was ist dein Lieblingsgetränk?', 'Welche Farbe hat dein Stift?', 'Was ist dein Lieblingsplatz im Park?',
    'Welches Wetter magst du?', 'Was ist dein Lieblingsmoment?', 'Welche Farbe hat dein Radiergummi?', 'Was ist dein Lieblingsausflugsziel?',
    'Welches Tier siehst du gerne im Zoo?', 'Was ist dein Lieblingsfeiertag?', 'Welche Farbe hat dein Heft?', 'Was ist dein Lieblingsfach?',
    'Welches Spiel spielst du draußen?', 'Was ist dein Lieblingssnack?', 'Welche Farbe hat dein T-Shirt?', 'Was ist dein Lieblingsplatz im Garten?',
    'Welches Eis magst du?', 'Was ist dein Lieblingskuchen?', 'Welche Farbe hat dein Lieblingskleid?', 'Was ist dein Lieblingsplatz zum Lesen?',
    'Welches Getränk trinkst du zum Frühstück?', 'Was ist dein Lieblingsfrühstück?', 'Welche Farbe hat dein Lieblingsbuch?', 'Was ist dein Lieblingsplatz zum Spielen?',
    'Welches Tier hättest du gerne als Haustier?', 'Was ist dein Lieblingsplatz zum Malen?', 'Welche Farbe hat dein Lieblingsspielzeug?', 'Was ist dein Lieblingsplatz zum Entspannen?',
    'Welches Obst isst du am liebsten?', 'Was ist dein Lieblingsplatz zum Lernen?', 'Welche Farbe hat dein Lieblingsstift?', 'Was ist dein Lieblingsplatz zum Träumen?',
    'Welches Gemüse isst du gerne?', 'Was ist dein Lieblingsplatz zum Schlafen?', 'Welche Farbe hat dein Lieblingsradiergummi?', 'Was ist dein Lieblingsplatz zum Singen?',
    'Welches Lied singst du gerne?', 'Was ist dein Lieblingsplatz zum Tanzen?', 'Welche Farbe hat dein Lieblingsheft?', 'Was ist dein Lieblingsplatz zum Basteln?',
    'Welches Handwerk machst du gerne?', 'Was ist dein Lieblingsplatz zum Bauen?', 'Welche Farbe hat dein Lieblingsspiel?', 'Was ist dein Lieblingsplatz zum Klettern?',
    'Welches Abenteuer möchtest du erleben?', 'Was ist dein Lieblingsplatz zum Verstecken?', 'Welche Farbe hat dein Lieblingsball?', 'Was ist dein Lieblingsplatz zum Rennen?',
    'Welches Spiel spielst du mit Freunden?', 'Was ist dein Lieblingsplatz zum Lachen?', 'Welche Farbe hat dein Lieblingsauto?', 'Was ist dein Lieblingsplatz zum Träumen?',
    'Welches Märchen magst du?', 'Was ist dein Lieblingsplatz zum Geschichtenerzählen?', 'Welche Farbe hat dein Lieblingspuzzle?', 'Was ist dein Lieblingsplatz zum Malen?',
    'Welches Bild malst du gerne?', 'Was ist dein Lieblingsplatz zum Zeichnen?', 'Welche Farbe hat dein Lieblingsfarbstift?', 'Was ist dein Lieblingsplatz zum Schreiben?',
    'Welches Wort schreibst du gerne?', 'Was ist dein Lieblingsplatz zum Lesen?', 'Welche Farbe hat dein Lieblingsbuchstabe?', 'Was ist dein Lieblingsplatz zum Rechnen?',
    'Welche Zahl magst du?', 'Was ist dein Lieblingsplatz zum Zählen?', 'Welche Farbe hat dein Lieblingswürfel?', 'Was ist dein Lieblingsplatz zum Würfeln?',
    'Welches Spiel spielst du am liebsten?', 'Was ist dein Lieblingsplatz zum Spielen?', 'Welche Farbe hat dein Lieblingsspielzeug?', 'Was ist dein Lieblingsplatz zum Bauen?',
    'Welches Gebäude baust du gerne?', 'Was ist dein Lieblingsplatz zum Konstruieren?', 'Welche Farbe hat dein Lieblingsstein?', 'Was ist dein Lieblingsplatz zum Sammeln?',
    'Welches sammelst du gerne?', 'Was ist dein Lieblingsplatz zum Entdecken?', 'Welche Farbe hat dein Lieblingsschatz?', 'Was ist dein Lieblingsplatz zum Suchen?'
];

// Button-Texte für Wiederhol-Funktion
const REPEAT_BUTTON_TEXT = 'Beim nächsten Mal wiederholen';
const REPEAT_BUTTON_TEXT_MARKED = 'Beim nächsten Mal wiederholen ✅';

// App State
const app = {
    currentGrade: 1,
    sessionSize: 5,
    currentSession: [],
    currentWordIndex: 0,
    repeatWords: new Set(),
    sessionWords: [],
    sessionRepeatWords: new Set(), // Wiederhol-Wörter in der aktuellen Übungsrunde
    
    init() {
        this.loadSettings();
        this.loadRepeatWords();
        this.checkShareLink();
        this.setupEventListeners();
        this.showStartScreen();
    },
    
    setupEventListeners() {
        // Settings
        document.getElementById('gradeSelect').addEventListener('change', (e) => {
            this.currentGrade = parseInt(e.target.value);
        });
        
        const sessionSizeSelect = document.getElementById('sessionSizeSelect');
        const sessionSizeValue = document.getElementById('sessionSizeValue');
        
        sessionSizeSelect.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            this.sessionSize = value;
            sessionSizeValue.textContent = value;
        });
    },
    
    loadSettings() {
        const saved = localStorage.getItem('buchtabieren_settings');
        if (saved) {
            try {
                const settings = JSON.parse(saved);
                this.currentGrade = settings.grade || 1;
                this.sessionSize = settings.sessionSize || 5;
                
                document.getElementById('gradeSelect').value = this.currentGrade;
                document.getElementById('sessionSizeSelect').value = this.sessionSize;
                document.getElementById('sessionSizeValue').textContent = this.sessionSize;
            } catch (e) {
                console.error('Error loading settings', e);
            }
        }
    },
    
    saveSettings() {
        const settings = {
            grade: this.currentGrade,
            sessionSize: this.sessionSize
        };
        localStorage.setItem('buchtabieren_settings', JSON.stringify(settings));
        this.showStartScreen();
    },
    
    loadRepeatWords() {
        const saved = localStorage.getItem('buchtabieren_repeat');
        if (saved) {
            try {
                this.repeatWords = new Set(JSON.parse(saved));
            } catch (e) {
                console.error('Error loading repeat words', e);
                this.repeatWords = new Set();
            }
        }
    },
    
    saveRepeatWords() {
        localStorage.setItem('buchtabieren_repeat', JSON.stringify([...this.repeatWords]));
    },
    
    checkShareLink() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            try {
                const decoded = decodeURIComponent(atob(hash));
                const state = JSON.parse(decoded);
                
                if (state.grade && state.grade >= 1 && state.grade <= 4) {
                    this.currentGrade = state.grade;
                }
                if (state.sessionSize && state.sessionSize >= 4 && state.sessionSize <= 10) {
                    this.sessionSize = state.sessionSize;
                }
                if (state.repeatWords && Array.isArray(state.repeatWords)) {
                    this.repeatWords = new Set(state.repeatWords);
                    this.saveRepeatWords();
                }
                
                this.saveSettings();
                // Clean URL
                window.history.replaceState(null, null, window.location.pathname);
            } catch (e) {
                console.error('Invalid share link', e);
            }
        }
    },
    
    showStartScreen() {
        this.hideAllScreens();
        document.getElementById('startScreen').classList.add('active');
    },
    
    showSettings() {
        this.hideAllScreens();
        document.getElementById('settingsScreen').classList.add('active');
    },
    
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    },
    
    startSession() {
        this.createSession();
        this.currentWordIndex = 0;
        this.showWord();
        this.hideAllScreens();
        document.getElementById('wordScreen').classList.add('active');
    },
    
    createSession() {
        const words = [...WORD_LISTS[this.currentGrade]];
        const sessionWords = [];
        
        // Zuerst Wiederhol-Wörter hinzufügen
        const gradeRepeatWords = [...this.repeatWords].filter(word => 
            words.includes(word)
        );
        
        // Übungsrunden-Wiederhol-Wörter speichern
        this.sessionRepeatWords = new Set();
        
        const repeatCount = Math.min(gradeRepeatWords.length, this.sessionSize);
        for (let i = 0; i < repeatCount; i++) {
            sessionWords.push(gradeRepeatWords[i]);
            this.sessionRepeatWords.add(gradeRepeatWords[i]);
        }
        
        // Rest mit zufälligen Wörtern füllen
        const remaining = this.sessionSize - sessionWords.length;
        const availableWords = words.filter(w => !sessionWords.includes(w));
        
        for (let i = 0; i < remaining; i++) {
            if (availableWords.length === 0) break;
            const randomIndex = Math.floor(Math.random() * availableWords.length);
            sessionWords.push(availableWords.splice(randomIndex, 1)[0]);
        }
        
        // Zufällige Reihenfolge
        this.sessionWords = this.shuffleArray([...sessionWords]);
    },
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    showWord() {
        if (this.currentWordIndex >= this.sessionWords.length) {
            this.endSession();
            return;
        }
        
        const word = this.sessionWords[this.currentWordIndex];
        document.getElementById('wordDisplay').textContent = word;
        document.getElementById('progressText').textContent = 
            `Wort ${this.currentWordIndex + 1} von ${this.sessionWords.length}`;
        
        // Karte zurücksetzen
        const card = document.getElementById('wordCard');
        card.classList.remove('flipped');
        
        // Prüfen ob Wort bereits markiert ist: Entweder in repeatWords oder in sessionRepeatWords (Übungsrunde)
        const isMarked = this.repeatWords.has(word) || this.sessionRepeatWords.has(word);
        
        // Button-Text setzen: Wenn Wort bereits markiert ist, mit ✅ anzeigen
        const repeatButton = document.getElementById('repeatWordButton');
        if (repeatButton) {
            if (isMarked) {
                repeatButton.textContent = REPEAT_BUTTON_TEXT_MARKED;
            } else {
                repeatButton.textContent = REPEAT_BUTTON_TEXT;
            }
        }
        
        // Info-Box aktualisieren
        this.updateInfoBox(word);
    },
    
    updateInfoBox(word) {
        // Worttyp bestimmen
        const isCapitalized = word[0] === word[0].toUpperCase();
        const wordType = isCapitalized ? 'Substantiv' : 'Verb/Adjektiv';
        document.getElementById('wordType').textContent = 
            `Groß oder klein? ${isCapitalized ? 'Groß' : 'Klein'} (${wordType})`;
        
        // Ablenkungsfrage
        const randomQuestion = DISTRACTION_QUESTIONS[
            Math.floor(Math.random() * DISTRACTION_QUESTIONS.length)
        ];
        document.getElementById('distractionQuestion').textContent = randomQuestion;
        
        // "Bist du sicher?" wird immer angezeigt
    },
    
    flipCard() {
        const card = document.getElementById('wordCard');
        card.classList.toggle('flipped');
    },
    
    toggleRepeat() {
        // Diese Funktion wird nicht mehr verwendet, da die Checkbox entfernt wurde
        // Die Funktionalität ist jetzt nur noch über den Button verfügbar
    },
    
    nextWord() {
        this.currentWordIndex++;
        this.showWord();
    },
    
    repeatWord() {
        // Karte zurücksetzen und Wort erneut anzeigen
        const card = document.getElementById('wordCard');
        card.classList.remove('flipped');
        
        const word = this.sessionWords[this.currentWordIndex];
        const repeatButton = document.getElementById('repeatWordButton');
        const isCurrentlyMarked = repeatButton && repeatButton.textContent.includes('✅');
        
        if (isCurrentlyMarked) {
            // Wort aus Wiederhol-Liste entfernen
            this.repeatWords.delete(word);
            this.sessionRepeatWords.delete(word);
            this.saveRepeatWords();
            
            // ✅ aus Button-Text entfernen
            if (repeatButton) {
                repeatButton.textContent = REPEAT_BUTTON_TEXT;
            }
        } else {
            // Wort zu Wiederhol-Liste hinzufügen
            this.repeatWords.add(word);
            this.sessionRepeatWords.add(word);
            this.saveRepeatWords();
            
            // ✅ zum Button-Text hinzufügen
            if (repeatButton) {
                repeatButton.textContent = REPEAT_BUTTON_TEXT_MARKED;
            }
        }
        
        // Wort bleibt gleich, nur Index nicht erhöhen
    },
    
    endSession() {
        this.hideAllScreens();
        document.getElementById('endScreen').classList.add('active');
        this.showConfetti();
    },
    
    showConfetti() {
        const confettiContainer = document.getElementById('confetti');
        const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
        const confettiCount = 100;
        
        // Container leeren
        confettiContainer.innerHTML = '';
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.opacity = '0.8';
            
            const animationDuration = Math.random() * 3 + 2;
            const animationDelay = Math.random() * 0.5;
            const horizontalMovement = (Math.random() - 0.5) * 200;
            
            confetti.style.animation = `confettiFall ${animationDuration}s ${animationDelay}s ease-out forwards`;
            confetti.style.setProperty('--horizontal', `${horizontalMovement}px`);
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, (animationDuration + animationDelay) * 1000);
        }
    },
    
    newSession() {
        this.startSession();
    },
    
    shareLink() {
        const state = {
            grade: this.currentGrade,
            sessionSize: this.sessionSize,
            repeatWords: [...this.repeatWords]
        };
        
        try {
            const encoded = btoa(encodeURIComponent(JSON.stringify(state)));
            const shareUrl = `${window.location.origin}${window.location.pathname}#${encoded}`;
            
            document.getElementById('shareLinkInput').value = shareUrl;
            document.getElementById('shareModal').classList.add('active');
        } catch (e) {
            console.error('Error creating share link', e);
            alert('Fehler beim Erstellen des Links');
        }
    },
    
    copyLink() {
        const input = document.getElementById('shareLinkInput');
        input.select();
        input.setSelectionRange(0, 99999);
        
        try {
            // Moderne Browser
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(input.value).then(() => {
                    alert('Link kopiert!');
                }).catch(() => {
                    // Fallback
                    document.execCommand('copy');
                    alert('Link kopiert!');
                });
            } else {
                // Fallback für ältere Browser
                document.execCommand('copy');
                alert('Link kopiert!');
            }
        } catch (err) {
            alert('Link konnte nicht kopiert werden. Bitte manuell kopieren.');
        }
    },
    
    closeShareModal() {
        document.getElementById('shareModal').classList.remove('active');
    }
};

// App initialisieren wenn DOM geladen
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
