let accy = 0
let accx = 0
let 目標 = game.createSprite(randint(0, 4), randint(0, 4))
let x = 2
let y = 2
led.plot(x, y)
basic.forever(function () {
    accx = input.acceleration(Dimension.X)
    accy = input.acceleration(Dimension.Y)
    if (accx > 200 && x > 0) {
        x = x + 1
    }
    if (accx < -200 && x < 4) {
        x = x - 1
    }
    if (accy > 200 && y > 0) {
        y = y + 1
    }
    if (accy < -200 && y < 4) {
        y = y - 1
    }
    basic.clearScreen()
    led.plot(x, y)
    basic.pause(500)
})
