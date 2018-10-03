var halfX = window.innerWidth / 2, halfY = window.innerHeight / 2;
var offset = 0.0;
var x, y, r, g, b;
var newX, newY;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noFill();
    x = noise(offset) * width;
    y = noise(offset + 5) * height;
}

function draw() {
    background(255, 2);

    newX = noise(offset) * width;
    newY = noise(offset + 5) * height;

    r = 255 * noise(offset + 10);
    g = 255 * noise(offset + 15);
    b = 255 * noise(offset + 20);
    stroke(r, g, b);

    ellipse(newX, newY, 50 * abs(newX - x), 50 * abs(newY - y));

    offset += 0.005;

    x = newX;
    y = newY;
}
