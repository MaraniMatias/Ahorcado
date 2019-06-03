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
  game.forceSetPalabra("importancia");
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

  it("Calcular puntos, sin errores para OSO", function() {
    game.forceSetPalabra("oso");
    const palabra = game.palabra;
    expect(game.palabra).equal("oso");
    palabra.split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(2);
  });

  it("Calcular puntos, sin errores para DOS", function() {
    game.forceSetPalabra("dos");
    const palabra = game.palabra;
    expect(game.palabra).equal("dos");
    palabra.split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(3);
  });

  it("Calcular puntos, con dos errores", function() {
    const palabra = game.palabra;
    game.check("9");
    game.check("3");
    palabra.split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(7);
  });

  it("Se equivoca en todos los intentos, puntaje -7", function() {
    "qwrysdfgbhj".split("").forEach(letter => {
      game.check(letter);
    });
    const result = game.getScore();
    assert(result.text === "perdiste");
    expect(result.score).equal(-7);
  });

  it("Exite un diccionario", function() {
    const dictionary = game.dictionary;
    assert(dictionary.length > 0);
  });

  it("Elegir una palabra del diccionario", function() {
    const game = new Ahorcado();
    const dictionary = game.dictionary;
    game.start();
    const palabraEnJuego = game.palabra;
    assert(dictionary.indexOf(palabraEnJuego) > -1);
  });
});
