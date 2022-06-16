let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
basic.forever(function () {
    control.waitMicros(1000)
    if (AlphaBot2.Ultrasonic() == 0 || AlphaBot2.Ultrasonic() > 30) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
    } else if (AlphaBot2.Ultrasonic() < 8 && AlphaBot2.Ultrasonic() > 0) {
        basic.clearScreen()
        control.waitMicros(1000)
        for (let index = 0; index < 2; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(500)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(500)
        }
    } else if (AlphaBot2.Ultrasonic() < 15 && AlphaBot2.Ultrasonic() > 8) {
        basic.clearScreen()
        control.waitMicros(1000)
        basic.showIcon(IconNames.Heart)
    } else if (AlphaBot2.Ultrasonic() < 22 && AlphaBot2.Ultrasonic() > 15) {
        basic.clearScreen()
        control.waitMicros(1000)
        AlphaBot2.RunDelay(Dir.forward, 100, 1)
        basic.pause(200)
        AlphaBot2.RunDelay(Dir.backward, 100, 1)
    } else if (AlphaBot2.Ultrasonic() <= 30 && AlphaBot2.Ultrasonic() > 22) {
        basic.clearScreen()
        control.waitMicros(1000)
        AlphaBot2.RunDelay(Dir.turnLeft, 100, 3.7)
    }
})
basic.forever(function () {
    if (true) {
    	
    }
})
basic.forever(function () {
	
})
