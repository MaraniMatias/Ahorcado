module.exports = {
  "Cargar pagina desde github": function(client) {
    client
      .url("http://127.0.0.1:8080/docs/index.html")
      .waitForElementVisible("body", 2000)
      .assert.title("Ahorcado")
      .assert.visible("h1.title.is-1")
      .pause(1000)
      .assert.containsText("h1.title.is-1", "Ahorcado")
      .end();
  },
  "Cambiar el nombre del jugador a 'Ahorcado'": function(client) {
    const inputName = "input[type=text].input";
    client
      .url("http://127.0.0.1:8080/docs/index.html")
      .pause(500)
      .assert.visible(inputName)
      .clearValue(inputName)
      .setValue(inputName, "Ahorcado")
      .pause(500)
      .getValue(inputName, function(result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.value, "Ahorcado");
        this.end();
      });
  }
};
