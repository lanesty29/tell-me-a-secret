input.onButtonPressed(Button.A, function () {
    radio.sendString("Yes")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    let No = ""
    if (receivedString == No) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == No) {
        let maybe = ""
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        if (receivedString == maybe) {
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("No")
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("maybe")
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
})
radio.setGroup(7)
