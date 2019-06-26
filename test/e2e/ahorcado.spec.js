module.exports = {
  "Cargar pagina desde local server": function(client) {
    client
      .url("http://127.0.0.1:8080/src/index.html")
      .waitForElementVisible("body", 2000)
      .assert.title("Ahorcado")
      .assert.visible("h1.title.is-1")
      .pause(1000)
      .assert.containsText("h1.title.is-1", "Ahorcado");
    // .end();
  },
  "Cambiar el nombre del jugador a 'Ahorcado'": function(client) {
    const inputName = "#playerName";
    client
      .pause(500)
      .assert.visible(inputName)
      .clearValue(inputName)
      .setValue(inputName, "Test");
  },
  "Establecer palabra manualmente, 'agiles'": function(client) {
    const checkboxWord = "#checkboxWord";
    const inputWord = "#inputWord";
    client
      .pause(500)
      .assert.visible(checkboxWord)
      .click(checkboxWord)
      .pause(500)
      .assert.visible(inputWord)
      .setValue(inputWord, "agiles")
      .end();
  }
};
