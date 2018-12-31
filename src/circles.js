export default s => {
    let halfX = s.windowWidth / 2, halfY = s.windowHeight / 2;
    let frameFactor = 20;
    let direction = 1, low, high;
    let change, corner;
    let a = halfX, r = 0;

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        corner = s.sqrt(s.pow(halfX, 2) + s.pow(halfY, 2));
    };

    s.draw = () => {
        if (r > corner) direction = -1;
        if (r < 0) direction = 1;

        s.fill(s.lerpColor(s.color(255), s.color(0), s.sin(s.frameCount / frameFactor)));

        change = s.sin(s.frameCount / (frameFactor * 2));
        s.ellipse(
            halfX + (direction > 0 ? s.cos(a / 10) : s.sin(a / 10)) * s.min([r, corner]),
            halfY + (direction > 0 ? s.sin(a / 10) : s.cos(a / 10)) * s.min([r, corner]),
            change * 60,
            change * 60
        );

        low = (s.abs(change) - 0.5) * direction;
        high = (s.abs(change) + 0.5) * direction;
        a += s.random(low, high);
        r += s.random(low, high);
    };
};
