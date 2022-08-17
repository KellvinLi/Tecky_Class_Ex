function setup() {
    createCanvas(400, 240);
    loadImage('cat.jpg', drawCat);
}

function drawCat(img) {
    image(img, 0, 0);
}