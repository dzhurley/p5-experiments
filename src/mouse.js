export default s => {
    let offset = 0;
    const xFactor = 100;
    const yFactor = 100;

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        s.frameRate(10);
    };

    s.draw = () => {
        if (!s.mouseIsPressed) return;

        s.fill(
            255 * s.noise(offset + 10),
            255 * s.noise(offset + 15),
            255 * s.noise(offset + 20),
            100
        );

        s.bezier(
            s.mouseX,
            s.mouseY,
            s.random(s.mouseX - xFactor, s.mouseX + xFactor),
            s.random(s.mouseY - yFactor, s.mouseY + yFactor),
            s.random(s.pmouseX - xFactor, s.pmouseX + xFactor),
            s.random(s.pmouseY - yFactor, s.pmouseY + yFactor),
            s.pmouseX,
            s.pmouseY
        );

        offset += 0.05;
    };
};
