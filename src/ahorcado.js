class Ahorcado {
  constructor() {
    this.wordHistory = [];
    this.language = "español";
    this.difficulty = "easy";
    this.dictionary = {
      español: {
        easy: ["oso", "casa", "perro", "otoño"],
        medium: ["importancia", "colectivo", "heladera", "facultad"],
        hard: ["helicoptero", "peyorativo", "misantropia", "filantropia", "epilepsia"]
      },
      ingles: {
        easy: ["bear", "house", "dog", "autumn"],
        medium: ["importance", "collective", "refrigerator", "faculty"],
        hard: ["helicoptero", "pejorative", "misanthropy"]
      },
      aleman: {
        easy: ["bär", "haus", "hund", "herbst"],
        medium: ["bedeutung", "kollektiv", "kühlschrank", "fakultät"],
        hard: ["misanthropy"]
      }
    };
  }

  /*
   * Configuración, prepara el juego, la forma de jugar
   */
  config({ jugador, language, difficulty }) {
    this.wordHistory = [];
    this.difficulty = difficulty;
    if (jugador) {
      this.jugador = jugador;
    }
    if (language) {
      this.language = language;
    }
  }

  /*
   * Método usado para tests
   */
  forceSetPalabra(word) {
    this.palabra = word;
  }

  /*
   * Settea variable para comenzar a jugar
   */
  start() {
    this.palabra = this._getRandomWord();
    this.historyGuessedLetters = [];
    this.lifes = 7;
    this.inGame = true; // Indica que todavia se esta jugando
    this.score = 0;
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  _getRandomWord() {
    const indexMax = this.dictionary[this.language][this.difficulty].length;
    const randomIndex = this._getRandomInt(indexMax);
    const word = this.dictionary[this.language][this.difficulty][randomIndex];
    if (this.wordHistory.indexOf(word) === -1) {
      this.wordHistory.push(word);
      return word;
    } else {
      if (this.wordHistory.length !== indexMax) {
        return this._getRandomWord();
      } else {
        this.wordHistory = [];
        return word;
      }
    }
  }

  check(letter) {
    const normalizeLetter = letter.toLowerCase();
    const letterIsValid = this.palabra.indexOf(normalizeLetter) > -1;
    if (this.inGame) {
      this._calculateScore(normalizeLetter, letterIsValid);
    }
    return letterIsValid;
  }

  _calculateScore(letter, letterIsValid) {
    if (letterIsValid) {
      if (this.historyGuessedLetters.indexOf(letter) === -1) {
        this.score = this.score + 1;
      }
      this.historyGuessedLetters.push(letter);
    }
    if (!letterIsValid && this.lifes > 0) {
      this.lifes--;
      this.score = this.score - 1;
    }

    if (this.lifes <= 0) {
      this.score = this.score - 1;
      this.inGame = false;
    }
  }

  showGameStatus() {
    let word = [];
    for (let i = 0; i < this.palabra.length; i++) {
      word.push("_");
    }
    this.historyGuessedLetters.forEach(guessedLetters => {
      for (let i = 0; i <= this.palabra.length; i++) {
        if (this.palabra[i] === guessedLetters) {
          word[i] = guessedLetters;
        }
      }
    });
    return word.join("");
  }

  getScore() {
    const rta = { text: null, score: null };
    if (typeof this.inGame === "undefined") return rta;
    return {
      text: this.lifes > 0 ? "ganaste" : "perdiste",
      score: this.score
    };
  }

  getLink() {
    return `https://wa.me/?text=¿Podes superarme?Mi puntaje es ${this.score}`;
  }
}

module.exports = Ahorcado;
