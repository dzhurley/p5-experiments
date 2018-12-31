export default s => {
    let offset = 0.0;
    let x, y, r, g, b;
    let newX, newY;

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        s.noFill();
        x = s.noise(offset) * s.width;
        y = s.noise(offset + 5) * s.height;
    };

    s.draw = () => {
        s.background(255, 2);

        newX = s.noise(offset) * s.width;
        newY = s.noise(offset + 5) * s.height;

        r = 255 * s.noise(offset + 10);
        g = 255 * s.noise(offset + 15);
        b = 255 * s.noise(offset + 20);
        s.stroke(r, g, b);

        s.ellipse(newX, newY, 50 * s.abs(newX - x), 50 * s.abs(newY - y));

        offset += 0.005;

        x = newX;
        y = newY;
    };
};
