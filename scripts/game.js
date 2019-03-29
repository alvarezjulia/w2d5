class Game {
    constructor() {
        //Add some properties
        this.obstacles = []
        this.bird = new Bird()
        this.init()
    }

    init() {}
    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        // stroke(0)
        frameRate(60)

        this.bird.setup()
    }
}
