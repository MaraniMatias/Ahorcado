class Ahorcado {
  constructor() {
    this.dictionary = ["oso", "casa", "importancia", "perro"];
  }

  config({ jugador }) {
    this.jugador = jugador;
  }

  start() {
    this.palabra = this.getRandomWord();
    this.letterHistory = [];
    this.lifes = 7;
    this.inGame = true;
    this.score = 0;
  }

  getRandomWord() {
    const getRandomInt = max => Math.floor(Math.random() * max);
    const len = this.dictionary.length - 1;
    return this.dictionary[getRandomInt(len)];
  }

  forceSetPalabra(word) {
    this.palabra = word;
  }

  check(letter) {
    const letterIsValid = this.palabra.indexOf(letter) > -1;
    if (this.inGame) {
      if (letterIsValid) {
        if (this.letterHistory.indexOf(letter) === -1) {
          this.score = this.score + 1;
        }
        this.letterHistory.push(letter);
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
    return letterIsValid;
  }

  showGame() {
    let word = [];
    for (let i = 0; i < this.palabra.length; i++) {
      word.push("_");
    }
    this.letterHistory.forEach(letter => {
      for (let i = 0; i <= this.palabra.length; i++) {
        if (this.palabra[i] === letter) word[i] = letter;
      }
    });
    return word.join("");
  }

  getScore() {
    const rta = { text: null, score: null };
    if (typeof this.inGame === "undefined") return rta;
    return {
      text: this.inGame ? "ganaste" : "perdiste",
      score: this.score
    };
  }
}

module.exports = Ahorcado;
