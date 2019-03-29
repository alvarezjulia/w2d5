//To have only one game
const game = new Game()

//Creo que esto es lo del live server
// let img

//YPOS FOR FIRST ELLIPSE
let ypos = 0
//YPOS FOR SECOND ELLIPSE
// let yposTwo = 0
let velocity = 0
let firstMouseClick = true

function draw() {
    clear()
    background(30, 80, 180)

    //CUANDO SE SALE DE LA PANTALLA EMPIEZA EN CERO
    // if (ypos > 640) ypos = 0

    velocity += ACCELERATION
    if (mouseIsPressed) {
        //GIVE BIRD AN UPWARD JUMP
        if (firstMouseClick) {
            velocity = -2
            firstMouseClick = false
        }
        velocity += ACCELERATION * -3
    } else {
        velocity += ACCELERATION
    }

    ypos += velocity

    //PARA QUE NOS SIGA CAYENDO
    // if (yposTwo > 640) yposTwo = 0

    //CUANDO CLICAS SUBE
    // if (mouseIsPressed) {
    //     ypos -= 1
    // } else {
    //     ypos += 1
    // }

    //SETS IMAGE
    // image(img, 300, ypos, img.width / 10, img.height / 10)

    //ONE ELLIPSE
    // fill(50)
    // ellipse(400, ypos, 80, 80)

    //BOLA CAE CONTINUAMENTE
    // fill(50)
    // ellipse(400, ypos++, 80, 80)

    //SECOND ELLIPSE
    // fill(80)
    // yposTwo += 2
    // ellipse(300, yposTwo, 80, 80)

    //HE HECHO ESTO YO SOLITA YEAAAAH jiji
    // if (ypos < 200) return ellipse(400, ypos++, 80, 80)
}
