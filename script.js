const carTraffic = document.querySelectorAll(".car-traffic__light")
const manTraffic = document.querySelectorAll(".man-traffic__light")
const timer = document.querySelector(".timer")
const state = document.querySelector(".state")

let it = -1

const RED = "#ff0000"
const YELLOW = "#ffff00"
const GREEN = "#00ff00"

const RED_d = "#330000"
const YELLOW_d = "#333300"
const GREEN_d = "#003300"

function init(){
    console.log(carTraffic)
    carTraffic[0].style.backgroundColor = RED_d
    carTraffic[1].style.backgroundColor = YELLOW_d
    carTraffic[2].style.backgroundColor = GREEN_d

    manTraffic[0].style.backgroundColor = RED_d
    manTraffic[1].style.backgroundColor = GREEN_d
}

init()

setInterval(() => {
    it++;
    timer.innerHTML = it;
    console.log("123")
    if(it % 24 == 0){
        state.innerHTML = "q1"
        carTraffic[0].style.backgroundColor = RED_d
        carTraffic[1].style.backgroundColor = YELLOW_d
        manTraffic[0].style.backgroundColor = RED
        carTraffic[2].style.backgroundColor = GREEN
    }
    else if(it % 24 == 10){
        state.innerHTML = "q2"
        carTraffic[1].style.backgroundColor = YELLOW
        carTraffic[2].style.backgroundColor = GREEN_d
    }
    else if(it % 24 == 12){
        state.innerHTML = "q3"
        manTraffic[0].style.backgroundColor = RED_d
        carTraffic[1].style.backgroundColor = YELLOW_d
        carTraffic[0].style.backgroundColor = RED
        manTraffic[1].style.backgroundColor = GREEN
    }
    else if(it % 24 == 22){
        state.innerHTML = "q4"
        manTraffic[1].style.backgroundColor = GREEN_d
        manTraffic[0].style.backgroundColor = RED
        carTraffic[1].style.backgroundColor = YELLOW
    }
}, 1000)