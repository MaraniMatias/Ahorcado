function pressKeys(browser, element, keysList) {
  keysList.split("").forEach(key => {
    browser.clearValue(element).setValue(element, key);
  });
  return browser;
}

function beforeStartGame(browser) {
  const inputName = "#playerName";
  const checkboxWord = "#checkboxWord";
  const inputWord = "#inputWord";
  const buttonStart = "button.button.is-primary";
  const showGameStatus = "#showGameStatus";
  browser
    .url("http://127.0.0.1:8080/src/index.html")
    .waitForElementVisible("body", 500)
    .assert.visible(inputName)
    .clearValue(inputName)
    .setValue(inputName, "Test")
    .assert.visible(checkboxWord)
    .click(checkboxWord)
    .assert.visible(inputWord)
    .setValue(inputWord, "agiles")
    .assert.visible(buttonStart)
    .click(buttonStart)
    .assert.visible(showGameStatus);
  return browser;
}

module.exports = {
  "Cargar pagina desde local server": function(browser) {
    browser
      .url("http://127.0.0.1:8080/src/index.html")
      .waitForElementVisible("body", 300)
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
      .setValue(inputWord, "agiles")
      .end();
  },
  "Adivinar palabra": function(browser) {
    beforeStartGame(browser);
    const inputKeys = "#inputKeys";

    pressKeys(browser, inputKeys, "agiles");
    browser.expect.element(".is-1.has-text-success").text.to.equal("ganaste");
    // browser.pause(500);
    browser.saveScreenshot("./docs/screenshot/winner_game.png");
    browser.end();
  },
  "Perder juego": function(browser) {
    beforeStartGame(browser);
    const inputKeys = "#inputKeys";

    pressKeys(browser, inputKeys, "qwrtyuo");
    browser.expect.element(".is-1.has-text-danger").text.to.equal("perdiste");
    browser.expect.element(".title.score").text.to.equal("-8");
    // browser.pause(500);
    browser.saveScreenshot("./docs/screenshot/lose_game.png");
    browser.end();
  },
  "Puntaje -6": function(browser) {
    beforeStartGame(browser);
    const inputKeys = "#inputKeys";

    pressKeys(browser, inputKeys, "qwertyuio");
    browser.expect.element(".title.score").text.to.equal("-6");
    // browser.pause(500);
    browser.end();
  }
};
