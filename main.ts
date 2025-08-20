basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("welcome")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(5000)
    }
})
