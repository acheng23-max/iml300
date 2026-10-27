let photos = [];
let floatingPhotos = [];

const photoFiles = [
  "assets/sea1.png",
  "assets/sea2.png",
  "assets/sea3.png",
  "assets/sea4.png",
  "assets/sea5.png"
];

async function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("position", "fixed");
  canvas.style("z-index", "0");
  canvas.style("pointer-events", "none");

  // Load the images
  for (let file of photoFiles) {
    let img = await loadImage(file);
    photos.push(img);
  }

  // Create 25 floating photos
  for (let i = 0; i < 25; i++) {
    floatingPhotos.push({
      img: random(photos),
      x: random(width),
      y: random(height),
      size: random(70, 160),
      speedX: random(-0.25, 0.25),
      speedY: random(-0.2, 0.2),
      angle: random(-0.25, 0.25),
      rotateSpeed: random(-0.001, 0.001),
      opacity: random(100, 190)
    });
  }
}

function draw() {
  clear();

  imageMode(CENTER);

  for (let photo of floatingPhotos) {

    // Move slowly
    photo.x += photo.speedX;
    photo.y += photo.speedY;
    photo.angle += photo.rotateSpeed;

    // Wrap around screen
    if (photo.x > width + 100) photo.x = -100;
    if (photo.x < -100) photo.x = width + 100;
    if (photo.y > height + 100) photo.y = -100;
    if (photo.y < -100) photo.y = height + 100;

    push();

    translate(photo.x, photo.y);
    rotate(photo.angle);

    // Soft transparent effect
    tint(255, photo.opacity);

    let ratio = photo.img.height / photo.img.width;

    image(
      photo.img,
      0,
      0,
      photo.size,
      photo.size * ratio
    );

    pop();
  }

  noTint();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}