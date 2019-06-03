// TDD using RGR
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();
const Ahorcado = require("./ahorcado");

var game;
beforeEach(function() {
  game = new Ahorcado();
  game.start();
});

describe("Ahorcado", function() {
  it("Ahorcado is running", function() {
    assert(typeof game === "object");
  });

  it("Tener un metodo start", function() {
    assert(typeof game.start === "function");
  });

  it("Tiene que tener una palabra 'importancia'", function() {
    assert(game.palabra === "importancia");
  });

  it("Ingresar letra correcta", function() {
    const result = game.check("i");
    assert(result === true);
  });

  it("Ingresar letra incorrecta", function() {
    const result = game.check("w");
    assert(result === false);
  });

  it("Adivinar palabra", function() {
    "importancia".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "ganaste");
  });

  it("Se equivoca en todos los intentos", function() {
    "qwrysdfgbhj".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "perdiste");
  });

  it("Solo 7 intentos", function() {
    "qwrysdfgbhjklzximportancia".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "perdiste");
  });

  it("Solo 1 intentos restante", function() {
    "qwrysdimportancia".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "ganaste");
  });

  it("Mostar letras ingresadas y en sus posición", function() {
    game.check("i");
    game.check("a");
    const result = game.showGame();
    assert(result === "i_____a__ia");
  });

  it("Guardar nombre del jugador", function() {
    const nombre = "matias";
    game.config({ jugador: nombre });
    assert(game.jugador === nombre);
  });

  it("Antes de jugarr el puntage es NULL", function() {
    const game = new Ahorcado();
    const result = game.getScore();
    assert(result.text === null);
    assert(result.score === null);
  });

  it("Calcular puntos, sin errores", function() {
    const palabra = game.palabra;
    palabra.split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(9);
  });
});
