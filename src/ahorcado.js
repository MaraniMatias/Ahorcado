class Ahorcado {
  constructor() {}

  start() {
    this.palabra = "importancia";
    this.letterHistory = [];
    this.lifes = 7;
    this.inGame = true;
  }

  check(letter) {
    const letterIsValid = this.palabra.indexOf(letter) > -1;
    if (letterIsValid) {
      this.letterHistory.push(letter);
    }
    if (!letterIsValid && this.lifes > 0) {
      this.lifes--;
    }
    if (this.lifes <= 0) {
      this.inGame = false;
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
        if (this.palabra[i] === letter) {
          word[i] = letter;
        }
      }
    });
    return word.join("");
  }

  score() {
    return this.inGame ? "ganaste" : "perdiste";
  }
}

module.exports = Ahorcado;
