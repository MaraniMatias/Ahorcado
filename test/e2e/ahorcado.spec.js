/*
function pressKeys(browser, keysList) {
  keysList.split("").forEach(key => {
    browser.keys(key, function(done) {
      browser.pause(500);
      browser.expect
        .element("#carousel_container")
        .to.have.css("display")
        .which.equals("block");
    });
  });
}
*/

module.exports = {
  "Cargar pagina desde local server": function(browser) {
    browser
      .url("http://127.0.0.1:8080/src/index.html")
      .waitForElementVisible("body", 2000)
      .assert.title("Ahorcado")
      .assert.visible("h1.title.is-1")
      .pause(1000)
      .assert.containsText("h1.title.is-1", "Ahorcado");
  },
  "Cambiar el nombre del jugador a 'Ahorcado'": function(browser) {
    const inputName = "#playerName";
    browser
      .pause(500)
      .assert.visible(inputName)
      .clearValue(inputName)
      .setValue(inputName, "Test");
  },
  "Establecer palabra manualmente, 'agiles'": function(browser) {
    const checkboxWord = "#checkboxWord";
    const inputWord = "#inputWord";
    browser
      .pause(500)
      .assert.visible(checkboxWord)
      .click(checkboxWord)
      .pause(500)
      .assert.visible(inputWord)
      .setValue(inputWord, "agiles");
  },
  "Adivinar palabra": function(browser) {
    const buttonStart = "button.button.is-primary";
    const showGameStatus = "#showGameStatus";
    // const inputKeys = "#inputKeys";
    browser.assert
      .visible(buttonStart)
      .click(buttonStart)
      .pause(500)
      .assert.visible(showGameStatus)
      .pause(1000);
    // browser.keys("t", function(done) {
    // browser.pause(5000);
    browser.end();
    // });
  }
};
