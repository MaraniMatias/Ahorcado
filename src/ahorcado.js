class Ahorcado {
  constructor() {
    this.idioma = "español";
    this.dictionary = {
      español: ["oso", "casa", "importancia", "perro"],
      ingles: ["home", "bear", "beer"]
    };
  }

  /*
   * Configuración, prepara el juego, la forma de jugar
   */
  config({ jugador, idioma }) {
    if (jugador) {
      this.jugador = jugador;
    }
    if (idioma) {
      this.idioma = idioma;
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
    const len = this.dictionary[this.idioma].length - 1;
    const randomIndex = this._getRandomInt(len);
    return this.dictionary[this.idioma][randomIndex];
  }

  check(letter) {
    const letterIsValid = this.palabra.indexOf(letter) > -1;
    if (this.inGame) {
      this._calculateScore(letter, letterIsValid);
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
}

module.exports = Ahorcado;
