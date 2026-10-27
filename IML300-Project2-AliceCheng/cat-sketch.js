
let pawPrints = [];
let floatingNotes = [];
let hearts = [];

let catMood = "waiting";

const phrases = [
  "Please, Mom!",
  "Just one cat...",
  "I promise!",
  "I'll take care of it!",
  "I'll clean up!",
  "Pretty please?",
  "I really love cats!",
  "One little kitten?",
  "I'll be responsible!",
  "Can we keep it?"
];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);
  canvas.style("position", "fixed");
  canvas.style("z-index", "1");
  canvas.style("pointer-events", "none");

  textFont("Caveat");

  // Create floating paw prints
  for (let i = 0; i < 35; i++) {
    pawPrints.push({
      x: random(width),
      y: random(height),
      size: random(12, 30),
      speedX: random(-0.2, 0.2),
      speedY: random(-0.35, -0.1),
      angle: random(-PI, PI),
      opacity: random(40, 110)
    });
  }

  // Create floating handwritten phrases
  for (let i = 0; i < 18; i++) {
    floatingNotes.push({
      text: random(phrases),
      x: random(width),
      y: random(height),
      size: random(17, 30),
      speedX: random(-0.2, 0.2),
      speedY: random(-0.25, 0.25),
      angle: random(-0.2, 0.2),
      opacity: random(55, 115)
    });
  }
}

function draw() {
  clear();

  // Paw prints
  for (let paw of pawPrints) {
    paw.x += paw.speedX;
    paw.y += paw.speedY;

    if (paw.y < -50) paw.y = height + 50;
    if (paw.x < -50) paw.x = width + 50;
    if (paw.x > width + 50) paw.x = -50;

    push();
    translate(paw.x, paw.y);
    rotate(paw.angle);

    let alpha = paw.opacity;

    if (catMood === "keep") {
      alpha = min(220, alpha + 90);
    }

    if (catMood === "giveup") {
      alpha = max(10, alpha - 65);
    }

    drawPaw(paw.size, alpha);
    pop();
  }

  // Floating phrases
  for (let note of floatingNotes) {
    note.x += note.speedX;
    note.y += note.speedY;

    if (note.x > width + 150) note.x = -150;
    if (note.x < -150) note.x = width + 150;
    if (note.y > height + 50) note.y = -50;
    if (note.y < -50) note.y = height + 50;

    push();
    translate(note.x, note.y);
    rotate(note.angle);

    textAlign(CENTER, CENTER);
    textSize(note.size);
    noStroke();

    let alpha = catMood === "giveup"
      ? 25
      : note.opacity;

    fill(125, 85, 55, alpha);
    text(note.text, 0, 0);

    pop();
  }

  // Hearts appear after choosing Keep Trying
  if (catMood === "keep") {
    if (frameCount % 18 === 0 && hearts.length < 45) {
      hearts.push({
        x: random(width),
        y: height + 20,
        size: random(8, 20),
        speed: random(0.5, 1.4),
        opacity: 160
      });
    }
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    let h = hearts[i];

    h.y -= h.speed;
    h.opacity -= 0.4;

    push();
    translate(h.x, h.y);
    noStroke();
    fill(190, 110, 110, h.opacity);
    textAlign(CENTER, CENTER);
    textSize(h.size);
    text("♥", 0, 0);
    pop();

    if (h.opacity <= 0 || h.y < -30) {
      hearts.splice(i, 1);
    }
  }
}

// Draw a paw print without images
function drawPaw(s, alpha) {
  noStroke();
  fill(165, 120, 88, alpha);

  ellipse(0, s * 0.2, s * 0.8, s * 0.65);

  ellipse(-s * 0.48, -s * 0.3, s * 0.28, s * 0.38);
  ellipse(-s * 0.16, -s * 0.55, s * 0.28, s * 0.4);
  ellipse(s * 0.2, -s * 0.55, s * 0.28, s * 0.4);
  ellipse(s * 0.52, -s * 0.3, s * 0.28, s * 0.38);
}

// Called when the user makes a choice
function updateCatBackground(choice) {
  catMood = choice;

  if (choice === "giveup") {
    hearts = [];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
