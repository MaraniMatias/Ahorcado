function pressKeys(browser, element, keysList) {
  keysList.split("").forEach(key => {
    browser.clearValue(element).setValue(element, key);
  });
  return browser;
}

module.exports = {
  "Cargar pagina desde local server": function(browser) {
    browser
      .url("http://127.0.0.1:8080/src/index.html")
      .waitForElementVisible("body", 2000)
      .assert.title("Ahorcado")
      .assert.visible("h1.title.is-1")
      .assert.containsText("h1.title.is-1", "Ahorcado");
  },
  "Cambiar el nombre del jugador a 'Ahorcado'": function(browser) {
    const inputName = "#playerName";
    browser.assert
      .visible(inputName)
      .clearValue(inputName)
      .setValue(inputName, "Test");
  },
  "Establecer palabra manualmente, 'agiles'": function(browser) {
    const checkboxWord = "#checkboxWord";
    const inputWord = "#inputWord";
    browser.assert
      .visible(checkboxWord)
      .click(checkboxWord)
      .assert.visible(inputWord)
      .setValue(inputWord, "agiles");
  },
  "Adivinar palabra": function(browser) {
    const buttonStart = "button.button.is-primary";
    const showGameStatus = "#showGameStatus";
    const inputKeys = "#inputKeys";
    browser.assert
      .visible(buttonStart)
      .click(buttonStart)
      .assert.visible(showGameStatus);
    pressKeys(browser, inputKeys, "agiles")
      // .expect.element(".is-1.has-text-success").to.be.an("p")
      .expect.element(".is-1.has-text-success")
      .text.to.equal("ganaste");
    browser.pause(700);
    browser.end();
  }
};
