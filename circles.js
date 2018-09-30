var halfX = window.innerWidth / 2, halfY = window.innerHeight / 2;
var frameFactor = 20;
var direction = 1, low, high;
var corner;
var a = halfX, r = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    corner = sqrt(pow(halfX, 2) + pow(halfY, 2));
}

function draw() {
    if (r > corner) direction = -1;
    if (r < 0) direction = 1;

    fill(lerpColor(color(255), color(0), sin(frameCount / frameFactor)));

    change = sin(frameCount / (frameFactor * 2));
    ellipse(
        halfX + (direction > 0 ? cos(a / 10) : sin(a / 10)) * min([r, corner]),
        halfY + (direction > 0 ? sin(a / 10) : cos(a / 10)) * min([r, corner]),
        change * 60,
        change * 60
    );

    low = (abs(change) - 0.5) * direction;
    high = (abs(change) + 0.5) * direction;
    a += random(low, high);
    r += random(low, high);
}
