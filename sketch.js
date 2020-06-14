function setup() {
  // put setup code here
  createCanvas(1000, 500);
  background(255, 50, 50);
  
};

function draw() {
  // put drawing code here
  keyC();
  keyD();
};

// Function to be placed in draw()

function keyC() {
  rect(100, 75, 100, 350);
  if ((mouseX >= 100) && (mouseX < 200) && (mouseY >= 75) && (mouseY < 425) && mouseIsPressed) {
    fill(240);
    rect(100, 75, 100, 350);
  } else {
    fill(255);
    rect(100, 75, 100, 350);
  }
};

function keyCSharp() {
  rect(160, 75, 75, 200);
  blackKeyPress();
};

function keyD() {
  rect(200, 75, 100, 350);
  if ((mouseX >= 200) && (mouseX < 300) && (mouseY >= 75) && (mouseY < 425) && mouseIsPressed) {
    fill(100);
    rect(200, 75, 100, 350);
  } else {
    fill(150);
    rect(200, 75, 100, 350);
  }
};

function whiteKeyPress() {
  if (mouseIsPressed) {
    fill(240);
  } else {
    fill(255);
  }
};

function blackKeyPress() {
  if (mouseIsPressed) {
    fill(50);
  } else {
    fill(100);
  }
};


// Class key(posotion, tone, misc) {

//   function placement(position) {
//     rect(x, );

//   }

//   fucntion note(tone) {
//     // do stuff here
//   }
// }