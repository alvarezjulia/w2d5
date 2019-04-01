function setup() {
    createCanvas(640, 640)
    background(240)
    angleMode(DEGREES)
}

let rect1y = 300
let rect1x = 300
let rect2x = 200
let rect2y = 120
let move = 0.1
let angle = 1

function draw() {
    clear()
    background(230)

    fill(0)
    fill('rgba(240,243,46, 0.80)')
    rotate(angle)
    triangle(rect1x, rect1y, rect1x + 50, rect1y + 80, rect1x + 30, rect1y + 85)

    if (rect1x >= 600) {
        rect1x = 590
    } else if (rect1y >= 600) {
        rect1y = 590
    } else if (rect1y < 30) {
        rect1y = 30
    } else if (rect1x < 30) {
        rect1x = 30
    }

    //COLLISION RECTANGLE
    // if (rect1x > rect2x - 60 && rect1x < rect2x + 35 && rect1y > rect2y - 60 && rect1y < rect2y + 85) {
    //     move = move * -1.5
    // } else {
    //     move = 5
    // }

    if (keyIsDown(LEFT_ARROW)) {
        rect1x -= move
        translate(50, 50)
        stroke(0)
        rotate(angle * 0.05)
        line(0, 0, 50, 50)
    }

    if (keyIsDown(RIGHT_ARROW)) {
        rect1x += move
        translate(rect1x + 40, rect1y + 40)
        stroke(0)
        rotate(angle--)
        line(0, 0, 50, 50)
    }

    if (keyIsDown(UP_ARROW)) {
        rect1y -= move
        translate(50, 50)
        stroke(0)
        rotate(angle * 0.05)
        line(0, 0, 50, 50)
    }

    if (keyIsDown(DOWN_ARROW)) {
        rect1y += move
        translate(50, 50)
        stroke(0)
        rotate(angle * -0.05)
        line(0, 0, 50, 50)
    }

    // fill(50, 140, 20)
    // rect(rect2x, rect2y, 30, 80)
}

//THE CODING TRAIN
// let angle = 0
// let x = 50
// let y = 50

// function setup() {
//     createCanvas(400, 400)
//     angleMode(DEGREES)
// }
// function draw() {
//     background(0)

//     translate(x, y)
//     rotate(angle)

//     stroke(255)
//     line(0, 0, 50, 50)

//     fill(255)
//     rectMode(CENTER)
//     rect(0, 0, 100, 50)

//     angle = angle + 5
// }
