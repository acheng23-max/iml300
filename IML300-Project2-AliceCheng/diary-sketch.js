
let floatingWords = [];

let words = [
  // Feelings
  "happy", "sad", "excited", "tired",
  "lonely", "peaceful", "anxious",
  "grateful", "hopeful", "homesick",
  "confused", "nostalgic", "proud",

  // Everyday moments
  "rainy day", "sunset", "coffee",
  "a little walk", "late night",
  "favorite song", "a phone call",
  "homework", "weekend", "dreams",
  "a warm hug", "a quiet morning",
  "a new friend", "missing home",
  "small happiness", "little things",

  // Diary thoughts
  "Dear Diary", "Today I...",
  "I remember", "What if...",
  "Maybe tomorrow", "I wish...",
  "Growing up", "Dear me",
  "Somewhere in time"
];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);
  canvas.style("position", "fixed");
  canvas.style("z-index", "0");
  canvas.style("pointer-events", "none");

  textFont("Caveat");

  // Create 65 floating words
  for (let i = 0; i < 65; i++) {
    floatingWords.push({
      word: random(words),
      x: random(width),
      y: random(height),
      size: random(18, 40),
      speedX: random(-0.3, 0.3),
      speedY: random(-0.3, 0.3),
      angle: random(-0.15, 0.15),
      rotateSpeed: random(-0.001, 0.001),
      opacity: random(65, 165)
    });
  }
}

function draw() {
  clear();

  textAlign(CENTER, CENTER);

  for (let item of floatingWords) {
    // Gentle floating movement
    item.x += item.speedX;
    item.y += item.speedY;
    item.angle += item.rotateSpeed;

    // Wrap around edges
    if (item.x > width + 120) item.x = -120;
    if (item.x < -120) item.x = width + 120;

    if (item.y > height + 60) item.y = -60;
    if (item.y < -60) item.y = height + 60;

    push();

    translate(item.x, item.y);
    rotate(item.angle);

    textSize(item.size);
    fill(100, 65, 42, item.opacity);

    text(item.word, 0, 0);

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
