let open = false;
let angle = 0;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background("#e8d5b5");

  // Title
  noStroke();
  fill("#513526");
  textSize(42);
  text("The Suitcase I Carry", 400, 85);

  textSize(18);
  text("Click the suitcase to open it", 400, 120);

  // Opening animation
  if (open && angle < 1) {
    angle = min(angle + 0.02, 1);
  }

  // Shadow
  noStroke();
  fill(80, 50, 30, 35);
  ellipse(400, 485, 510, 45);

  // Suitcase bottom
  stroke("#4e3020");
  strokeWeight(7);
  fill("#855537");
  rect(400, 375, 480, 220, 18);

  // Inner lining
  fill("#d7b992");
  rect(400, 360, 450, 170, 12);

  // Handle
  noFill();
  stroke("#513526");
  strokeWeight(12);
  arc(400, 485, 100, 45, 0, PI);

  // Lid flips around the back hinge
  let lidHeight = 220 * cos(angle * HALF_PI);
  let lidY = 265 - 100 * sin(angle * HALF_PI);

  stroke("#4e3020");
  strokeWeight(7);
  fill("#986843");
  rect(400, lidY, 480, max(8, abs(lidHeight)), 18);

  // Decorative leather border
  stroke("#c39a6a");
  strokeWeight(3);
  noFill();
  rect(400, lidY, 450, max(5, abs(lidHeight) - 20), 12);

  // Brass locks
  if (angle < 0.9) {
    noStroke();
    fill("#c9a66d");
    rect(260, 365, 38, 25, 4);
    rect(540, 365, 38, 25, 4);
  }

  // Button after opening
  if (angle >= 1) {
    noStroke();
    fill("#805338");
    rect(400, 540, 270, 50, 5);

    fill("#fff1d9");
    textSize(19);
    text("Explore My Memories →", 400, 547);
  }
}

function mousePressed() {
  if (!open &&
      mouseX > 160 && mouseX < 640 &&
      mouseY > 150 && mouseY < 490) {
    open = true;
  }

  if (angle >= 1 &&
      mouseX > 265 && mouseX < 535 &&
      mouseY > 515 && mouseY < 565) {
    window.location.href = "index.html";
  }
}