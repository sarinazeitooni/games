let pg;
function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  fill(100);
  // humanInput
  text("enter humans count: ", 20, 20, 120, 30);
  humanInput = createInput("")
    .position(150, 25)
    .size(40)
    .attribute("type", "number")
    .attribute("id", "humanInput")
    .input((e) => {
      // store count
      humanCount = e.target.value;
    });
  // zombieInput
  text("enter zombies count: ", 200, 20, 120, 30);
  zombieInput = createInput("")
    .position(330, 25)
    .size(40)
    .attribute("type", "number")
    .attribute("id", "zombieInput")
    .input((e) => {
      // store count
      zombieCount = e.target.value;
    });
  // submit button
  submitButton = createButton("submit")
    .position(400, 25)
    .attribute("id", "submitButton")
    .mousePressed(() => {
      zombieInput.attribute("disabled", true);
      humanInput.attribute("disabled", true);
      select("#submitButton").elt.disabled = true;
    });
  // reset button
  resetButton = createButton("reset").position(480, 25).mousePressed(resetGame);
}
function resetGame() {
  select("#humanInput").elt.disabled = false;
  select("#zombieInput").elt.disabled = false;
  select("#humanInput").value("");
  select("#zombieInput").value("");
  select("#submitButton").elt.disabled = false;
}
function generateHuman(count) {}
function generateZombie(count) {}
