var factor = 0;
var offset = 0;
var xFactor = 100;
var yFactor = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
}

function draw() {
    if (!mouseIsPressed) {
        return;
    }

    fill(
        255 * noise(offset + 10),
        255 * noise(offset + 15),
        255 * noise(offset + 20),
        100
    );

    bezier(
        mouseX,
        mouseY,
        random(mouseX - xFactor, mouseX + xFactor),
        random(mouseY - yFactor, mouseY + yFactor),
        random(pmouseX - xFactor, pmouseX + xFactor),
        random(pmouseY - yFactor, pmouseY + yFactor),
        pmouseX,
        pmouseY
    )

    offset += 0.05;
}
