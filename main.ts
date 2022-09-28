let item = false
basic.forever(function () {
    if (maqueen.Ultrasonic(null) < 15 && maqueen.Ultrasonic(null) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 121)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 121)
            basic.pause(300)
        }
        if (item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 121)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 121)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
