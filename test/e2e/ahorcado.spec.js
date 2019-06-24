module.exports = {
  "Cargar pagina desde github": function(client) {
    client
      .url("https://maranimatias.github.io/Ahorcado/")
      .waitForElementVisible("body", 2000)
      .assert.title("Ahorcado")
      .assert.visible("h1.title.is-1")
      .pause(1000)
      .assert.containsText("h1.title.is-1", "Ahorcado")
      .end();
  }
};
