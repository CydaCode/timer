
// Gobal variable

const time_el = document.querySelector(".timer-count");
const time_days = document.querySelector("#timer-count-days");
const time_hours = document.querySelector("#timer-count-hours");
const time_mins = document.querySelector("#timer-count-mins");
const time_secs = document.querySelector("#timer-count-secs");
const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");


// let counter = 0;
let interval = null;

// Event listener
start_btn.addEventListener("click", start)
stop_btn.addEventListener("click", stop)
reset_btn.addEventListener("click", reset)


// Update the timer 

// if (time_secs.value < 10) {time_secs.value = "0" + time_secs.value};
// if (time_mins.value < 10) {time_mins.value = "0" + time_mins.value};
// if (time_hours.value < 10) {time_hours.value = "0" + time_hours.value};
// if (time_days.value < 10) {time_days.value = "0" + time_days.value};

let t = time_days.value = 0;
        time_hours.value = 0;
        time_mins.value = 0;
        time_secs.value = 0;

function timer() {
    if(time_days.value === 0 && time_hours.value === 0 && time_mins.value === 0 && time_secs.value === 0) {
        t === true
    } else if(time_secs.value != 0 ) {
        time_secs.value--
    } else if(time_mins.value != 0 && time_secs.value == 0) {
        time_secs.value = 59;
        time_mins.value--;
    } else if(time_hours.value != 0 && time_mins.value == 0) {
        time_mins.value = 60;
        time_hours.value--;
    }else if(time_days.value != 0 && time_hours.value == 0) {
        time_hours.value = 24;
        time_days.value--;
    }
    return
}




function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null
}

function reset() {
    stop();
    time_days.value = 00;
    time_hours.value = 00;
    time_mins.value = 00;
    time_secs.value = 00;
}

time_el.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        start()
    }
})

// function congratulations() {
//     if(time_days.value = 00 ) {
//         congrats_el.classList.remove("timer")
//     } else {
//         start()
//     }
// }