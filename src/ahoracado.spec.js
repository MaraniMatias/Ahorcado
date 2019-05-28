// TDD using RGR
const chai = require("chai");
const assert = chai.assert;
// const expect = chai.expect;
// const should = chai.should();
const Ahorcado = require("./ahoracado");

var game;
beforeEach(function() {
  game = new Ahorcado();
});

describe("Ahorcado", function() {
  it("Ahorcado is running", function() {
    assert(typeof game === "object");
  });

  it("Tener un metodo start", function() {
    assert(typeof game.start === "function");
  });

  it("Tiene que tner una palabra", function() {
    assert(game.palabra === "importancia");
  });

  it("Check i debe ser true", function() {
    const result = game.check("i");
    assert(result === true);
  });

  it("Check w debe ser false", function() {
    const result = game.check("w");
    assert(result === false);
  });

  it("Adivinar palabra", function() {
    "importancia".split().forEach(letter => {
      game.check(letter);
    });
    const result = game.score();
    assert(result === "ganaste");
  });

  it("Morrir en el intento", function() {
    "qwrysdfgbhj".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.score();
    assert(result === "perdiste");
  });

  it("Solo 7 intentos", function() {
    "qwrysdfgbhjklzximportancia".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.score();
    assert(result === "perdiste");
  });

  it("Solo 1 intentos restante", function() {
    "qwrysdimportancia".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.score();
    assert(result === "ganaste");
  });

  it("Mostar juego", function() {
    game.check("a");
    const result = game.showGame();
    assert(result === "______a___a");
  });
});
