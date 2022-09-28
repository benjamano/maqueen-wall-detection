let item = false
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        basic.showIcon(IconNames.Sad)
        if (item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 121)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 121)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(300)
        }
        if (item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 121)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 121)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(300)
        }
    } else {
        basic.showIcon(IconNames.Happy)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 170)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
})
