function setup() {
    createCanvas(640, 640)
    background(240)
}

let rect1y = 30
let rect1x = 30
let rect2x = 200
let rect2y = 120
let move = 5

function draw() {
    clear()
    background(230)

    fill(0)
    rect(rect1x, rect1y, 55, 55, 0, 40, 65, 50)

    if (rect1x >= 600) {
        rect1x = 590
    } else if (rect1y >= 600) {
        rect1y = 590
    } else if (rect1y < 30) {
        rect1y = 30
    } else if (rect1x < 30) {
        rect1x = 30
    }

    if (rect1x > rect2x - 60 && rect1x < rect2x + 35 && rect1y > rect2y - 60 && rect1y < rect2y + 85) {
        move = move * -1.5
    } else {
        move = 5
    }

    if (keyIsDown(LEFT_ARROW)) {
        rect1x -= move
    }

    if (keyIsDown(RIGHT_ARROW)) {
        rect1x += move
    }

    if (keyIsDown(UP_ARROW)) {
        rect1y -= move
    }

    if (keyIsDown(DOWN_ARROW)) {
        rect1y += move
    }

    fill(50, 140, 20)
    rect(rect2x, rect2y, 30, 80)
}
