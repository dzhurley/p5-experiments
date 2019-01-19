export default s => {
    let offset = 0.0;
    let x, y;
    let vary = 30;

    let lastKey, keyNoise;

    const shiftKeys = [33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 58, 60,
        62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 94, 95, 123,
        124, 125, 126];

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        x = s.noise(offset) * s.width;
        y = s.noise(offset + 5) * s.height;
        s.stroke(255, 255, 255);
        s.frameRate(20);
    };

    s.draw = () => {
        if (!s.keyIsPressed || !lastKey) {
            return;
        }

        s.fill(
            255 * s.noise(lastKey + 10),
            255 * s.noise(lastKey + 15),
            255 * s.noise(lastKey + 20),
            255 * s.noise(offset + 25),
        );

        keyNoise = 200 * s.noise(lastKey);
        if (shiftKeys.indexOf(lastKey) < 0) {
            s.quad(
                x + s.random(vary - keyNoise, vary + keyNoise), y + s.random(vary - keyNoise, vary + keyNoise),
                x + s.random(vary - keyNoise, vary + keyNoise), y - s.random(vary - keyNoise, vary + keyNoise),
                x - s.random(vary - keyNoise, vary + keyNoise), y - s.random(vary - keyNoise, vary + keyNoise),
                x - s.random(vary - keyNoise, vary + keyNoise), y + s.random(vary - keyNoise, vary + keyNoise),
            );
        } else {
            s.ellipse(
                x,
                y,
                s.random(vary - keyNoise, vary + keyNoise),
                s.random(vary - keyNoise, vary + keyNoise),
            );
        }

        offset += 0.05;
        x = s.noise(offset) * s.width;
        y = s.noise(offset + 5) * s.height;
    };

    s.keyPressed = () => lastKey = s.unchar(s.key);
};
