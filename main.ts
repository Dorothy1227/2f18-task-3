input.onButtonPressed(Button.A, function () {
    counter = 0
})
input.onButtonPressed(Button.B, function () {
    counter = 9
    while (counter >= 0) {
        basic.showNumber(counter)
        counter += -1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
let counter = 0
basic.showString("2F18 Dorothy")
