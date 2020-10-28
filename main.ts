let grade = 0
let grade_A = 0
let passed_students = 0
let grade_b = 0
let grade_c = 0
let grade_d = 0
let failed_students = 0
let grade_f = 0
let total_grades = 0
let average = 0
let number_of_dice = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        grade = randint(1, 100)
        basic.showNumber(grade)
        if (grade >= 90 && grade <= 100) {
            basic.showString("A")
            grade_A += 1
            passed_students += 1
        } else if (grade >= 80 && grade <= 89) {
            basic.showString("B")
            grade_b += 1
            passed_students += 1
        } else if (grade >= 70 && grade <= 79) {
            basic.showString("C")
            grade_c += 1
            passed_students += 1
        } else if (grade >= 60 && grade <= 69) {
            basic.showString("D")
            grade_d += 1
            failed_students += 1
        } else if (grade <= 59) {
            basic.showString("F")
            grade_f += 1
            failed_students += 1
        }
    }
    total_grades += grade
    average = total_grades / 20
    basic.showString("average")
    basic.showNumber(average)
    basic.showString("passed students ")
    basic.showNumber(passed_students)
    basic.showString("failed students ")
    basic.showNumber(failed_students)
})
input.onButtonPressed(Button.B, function () {
    for (let numbers = 0; numbers <= 5; numbers++) {
        basic.showNumber(numbers)
    }
    basic.clearScreen()
    number_of_dice = randint(1, 6)
    basic.showNumber(number_of_dice)
    if (number_of_dice == 3 || number_of_dice == 6) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        x = randint(0, 4)
        y = randint(0, 4)
        basic.showString("x=")
        basic.showNumber(x)
        basic.clearScreen()
        basic.showString("y=")
        basic.showNumber(y)
        basic.clearScreen()
        if (x == y) {
            basic.showString("winner")
            music.playMelody("E B C5 A B G A F ", 120)
        } else if (x != y) {
            led.plot(x, y)
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
