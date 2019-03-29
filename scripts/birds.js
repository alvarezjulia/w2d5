class Bird {
    constructor() {}

    setup() {
        this.img = loadImage(
            'https://raw.githubusercontent.com/ironhack-webdev-squad-126/w2d5/master/assets/bird.png'
        )
    }

    draw() {
        fill(0)
        //EMPIEZA EN TODO EN CERO CUANDO SALE DE LA PANTALLA
        //PARA LA OPCIÓN DE LA GRAVEDAD
        if (ypos > 640) {
            ypos = 0
            velocity = 0
        }
    }
}
