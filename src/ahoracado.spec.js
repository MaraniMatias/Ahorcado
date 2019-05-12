// TDD using RGR
const chai = require("chai");
const assert = chai.assert;
// const expect = chai.expect;
// const should = chai.should();
const Ahorcado = require("./ahoracado");
const game = new Ahorcado();

describe("Ahorcado", function() {
  it("Ahorcado is running", function() {
    assert(typeof game === "object");
  });
});
