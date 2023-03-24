let y_position = 4
let x_position = 2
led.plot(2, 4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        x_position += 1
        led.plot(x_position, y_position)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        x_position += -1
        led.plot(x_position, y_position)
        basic.pause(100)
    }
    if (input.logoIsPressed()) {
        for (let index = 0; index < 4; index++) {
            basic.clearScreen()
            y_position += -1
            led.plot(x_position, y_position)
            basic.pause(100)
        }
    }
})
