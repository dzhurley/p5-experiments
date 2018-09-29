var frameFactor = 20;
var halfX = window.innerWidth / 2, halfY = window.innerHeight / 2;
var corner;
var a = halfX, r = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    corner = sqrt(pow(halfX, 2) + pow(halfY, 2));
}

function draw() {
    if (r > corner) {
        noLoop();
    }

    fill(lerpColor(color(255), color(0), sin(frameCount / frameFactor)));

    change = sin(frameCount / (frameFactor * 2));
    ellipse(
        halfX + cos(a / 10) * min([r, corner]),
        halfY + sin(a / 10) * min([r, corner]),
        change * 60,
        change * 60
    );
    a += random(abs(change) - 0.5, abs(change) + 0.5);
    r += random(abs(change) - 0.5, abs(change) + 0.5);
}
