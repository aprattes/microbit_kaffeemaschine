let zustand = 0
let timer = 0
input.onButtonPressed(Button.A, function () {
    if (zustand == 0) {
        zustand = 1
    } else if (zustand == 1 || zustand == 3) {
        zustand = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (zustand == 1) {
        zustand = 2
        timer = control.millis() + 5000
    } else if (zustand == 3) {
        zustand = 0
    }
})
basic.forever(function () {
    if (zustand == 0) {
        basic.showIcon(IconNames.Asleep)
    } else if (zustand == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (zustand == 2) {
        basic.showIcon(IconNames.Square)
        if (control.millis() > timer) {
            zustand = 3
        }
    } else if (zustand == 3) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # #
            . # # # #
            . # # # .
            `)
    }
    basic.pause(1000)
})
