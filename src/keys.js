export default s => {
    let offset = 0.0;
    let x, y;
    let vary = 25;

    let lastKey, keyNoise;

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
        s.quad(
            x + s.random(vary - keyNoise, vary + keyNoise), y + s.random(vary - keyNoise, vary + keyNoise),
            x + s.random(vary - keyNoise, vary + keyNoise), y - s.random(vary - keyNoise, vary + keyNoise),
            x - s.random(vary - keyNoise, vary + keyNoise), y - s.random(vary - keyNoise, vary + keyNoise),
            x - s.random(vary - keyNoise, vary + keyNoise), y + s.random(vary - keyNoise, vary + keyNoise),
        );

        offset += 0.05;
        x = s.noise(offset) * s.width;
        y = s.noise(offset + 5) * s.height;
    };

    s.keyPressed = () => lastKey = s.unchar(s.key);
};
