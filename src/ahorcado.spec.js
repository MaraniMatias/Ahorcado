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

function checkLetters(letterList) {
  letterList.split("").forEach(letter => {
    game.check(letter);
  });
}

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
    checkLetters("importancia");
    const result = game.getScore();
    assert(result.text === "ganaste");
  });

  it("Se equivoca en todos los intentos", function() {
    checkLetters("qwrysdfgbhj");
    const result = game.getScore();
    assert(result.text === "perdiste");
  });

  it("Solo 7 intentos", function() {
    checkLetters("qwrysdfgbhjklzximportancia");
    const result = game.getScore();
    assert(result.text === "perdiste");
  });

  it("Solo 1 intentos restante", function() {
    checkLetters("qwrysdimportancia");
    const result = game.getScore();
    assert(result.text === "ganaste");
  });

  it("Mostar letras ingresadas y en sus posición", function() {
    game.check("i");
    game.check("a");
    const result = game.showGameStatus();
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
    checkLetters(palabra);
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(2);
  });

  it("Calcular puntos, sin errores para DOS", function() {
    game.forceSetPalabra("dos");
    const palabra = game.palabra;
    expect(game.palabra).equal("dos");
    checkLetters(palabra);
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(3);
  });

  it("Calcular puntos, con dos errores", function() {
    const palabra = game.palabra;
    game.check("9");
    game.check("3");
    checkLetters(palabra);
    const result = game.getScore();
    assert(result.text === "ganaste");
    expect(result.score).equal(7);
  });

  it("Se equivoca en todos los intentos, puntaje -7", function() {
    checkLetters("qwrysdfgbhj");
    const result = game.getScore();
    assert(result.text === "perdiste");
    expect(result.score).equal(-7);
  });

  it("Exite un diccionario", function() {
    const dictionary = game.dictionary;
    assert(typeof dictionary !== "undefined");
  });

  it("Elegir un  palabra del diccionario", function() {
    const game = new Ahorcado();
    const idioma = "español";
    const difficulty = "easy";

    const dictionary = game.dictionary[idioma][difficulty];
    game.config({ idioma, difficulty });
    game.start();
    const palabraEnJuego = game.palabra;
    assert(dictionary.indexOf(palabraEnJuego) > -1);
  });

  it("Diccionario en Español", function() {
    const dictionary = game.dictionary;
    assert(dictionary["español"]);
  });
  it("Diccionario en Ingles", function() {
    const dictionary = game.dictionary;
    assert(dictionary["ingles"]);
  });
  it("Diccionario en Aleman", function() {
    const dictionary = game.dictionary;
    assert(dictionary["aleman"]);
  });

  it("No repetir palabras para una configuracion dada", function() {
    const g = new Ahorcado();
    const idioma = "español";
    const difficulty = "easy";
    g.config({ idioma, difficulty });

    const dictionary = g.dictionary[idioma][difficulty];
    assert(dictionary.length === 4);

    g.start();
    const palabraEnJuego1 = g.palabra;
    g.start();
    const palabraEnJuego2 = g.palabra;
    g.start();
    const palabraEnJuego3 = g.palabra;
    g.start();
    const palabraEnJuego4 = g.palabra;

    expect(palabraEnJuego1)
      .is.not.equal(palabraEnJuego2)
      .is.not.equal(palabraEnJuego3)
      .is.not.equal(palabraEnJuego4);
  });

  it("Repetir palabra despues de recorre todo el diccionario", function() {
    game.start();
    const palabraEnJuego1 = game.palabra;
    game.start();
    const palabraEnJuego2 = game.palabra;
    game.start();
    const palabraEnJuego3 = game.palabra;
    game.start();
    const palabraEnJuego4 = game.palabra;
    game.start();
    const palabraEnJuegoRepetida = game.palabra;

    assert(
      palabraEnJuegoRepetida === palabraEnJuego1 ||
        palabraEnJuegoRepetida === palabraEnJuego2 ||
        palabraEnJuegoRepetida === palabraEnJuego3 ||
        palabraEnJuegoRepetida === palabraEnJuego4
    );
  });

  it("Nivel de dificulta por diccionario, fácil, medio, difícil", function() {
    const dictionaryObject = game.dictionary;
    Object.values(dictionaryObject).forEach(dictionary => {
      expect(dictionary).to.have.property("easy");
      expect(dictionary).to.have.property("medium");
      expect(dictionary).to.have.property("hard");
    });
  });

  it("Generar link para compartir puntos por WhatsApp", function() {
    const link = "https://wa.me/?text=¿Podes superarme?Mi puntaje es 7";
    const palabra = game.palabra;
    game.check("9");
    game.check("3");
    checkLetters(palabra);
    const { score } = game.getScore();
    expect(score).equal(7);
    const result = game.getLink();
    expect(result).equal(link);
  });
});
