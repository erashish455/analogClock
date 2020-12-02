setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
let digihour = document.getElementById('hour')
let digiminuts = document.getElementById('minuts')
let digiseconds = document.getElementById('seconds')
let dayNight = document.getElementById('AmPm')
var time;
let AmPm;
var alHours, alMinuts, alAmPm;
var currentDate;

function setClock() {
    currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    let AmPm;
    time = currentDate.getHours()
    if (time > 12) {
        time = time - 12
        AmPm = 'PM'
    } else {
        AmPm = 'AM'

    }
    digihour.textContent = time;
    digiminuts.textContent = currentDate.getMinutes();
    digiseconds.textContent = currentDate.getSeconds();
    dayNight.textContent = AmPm
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


function alarm() {
    alHours = document.querySelector('#alhours')
    console.log(alHours.value)
    alMinuts = document.querySelector('#alminuts')
    alAmPm = document.querySelector('#alAmPm')
    addshake()



}



function addshake() {
    var clock = document.querySelector('.clock')

    if (alHours.value == time && alMinuts.value == currentDate.getMinutes()) {
        clock.classList.add('shake')
        setTimeout(removeshake(), 60000)
    }

}
setInterval(addshake, 1000)



function removeshake() {
    let clockrem = document.querySelector('.clock')
    clockrem.classList.remove
}
