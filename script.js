





// Global Variable

window.addEventListener("load", () => {
    const form = document.querySelector(".set-timer");
    const input = document.querySelector(".set-timer-input");
    const count_el = document.querySelector(".counter-time");
    const start_btn = document.querySelector("#start");
    const stop_btn = document.querySelector("#stop");
    const reset_btn = document.querySelector("#reset");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const task = input.value;
        
        // Set an error message
        if(!task || task == "" || task == null || task.indexOf(' ') == 0) {
            alert("Please Set a Time"); 
            return;
        } 
      
        let counter = Number(task) * 3600;
        let interval = null;

        // Event Listeners

        start_btn.addEventListener("click", start)
        stop_btn.addEventListener("click", stop)
        reset_btn.addEventListener("click", reset)

        // Update ttimer
        function timer() {
            counter--;

            let hours = Math.floor((counter % (24 * 60 * 60) / (60 * 60)));
            let mins = Math.floor((counter % (60 * 60) / (60)));
            let secs = Math.floor((counter % (60))) ;
            
            if (secs < 10) secs = "0" + secs +"s";
            if (secs >= 10) secs = secs +"s";
            if (mins < 10) mins = "0" + mins +"m";
            if (mins >= 10) mins = mins +"m";
            if (hours < 10) hours = "0" + hours +"h";
            if (hours >= 10) hours = hours +"h";

            
        

            count_el.innerText = `${hours} : ${mins} : ${secs}`

            if (counter <= 0 || counter <1) {
                congr();
                clearInterval(interval);
                
            }
            input.value =""
            
        }

        function congr() {
            count_el.innerText = "TIME OUT"
            
        }

        function start() {
            if (interval) {
                return
            }
            interval = setInterval(timer, 1000)
        }

        function stop() {
                clearInterval(interval);
                interval = null
        }

        function reset() {
                stop();
                counter = 0
                count_el.innerText = "00h : 00m : 00s"
        }

        input.addEventListener("keypress", (e) => {
                if(e.key === "Enter") {
                    start()
                }
            })

        

    })

})





























// Gobal variable
// const ti_el = document.querySelector("timer");
// const time_el = document.querySelector(".timer-count");
// const time_days = document.querySelector("#timer-count-days");
// const time_hours = document.querySelector("#timer-count-hours");
// const time_mins = document.querySelector("#timer-count-mins");
// const time_secs = document.querySelector("#timer-count-secs");
// const start_btn = document.querySelector("#start");
// const stop_btn = document.querySelector("#stop");
// const reset_btn = document.querySelector("#reset");


// // let counter = 0;
// let interval = null;

// // Event listener
// start_btn.addEventListener("click", start)
// stop_btn.addEventListener("click", stop)
// reset_btn.addEventListener("click", reset)


// // Update the timer 

// // if (time_secs.value < 10) {time_secs.value = "0" + time_secs.value};
// // if (time_mins.value < 10) {time_mins.value = "0" + time_mins.value};
// // if (time_hours.value < 10) {time_hours.value = "0" + time_hours.value};
// // if (time_days.value < 10) {time_days.value = "0" + time_days.value};

// let t = time_days.value = 0;
//         time_hours.value = 0;
//         time_mins.value = 0;
//         time_secs.value = 0;

// timer()

// function timer() {
//     if(time_days.value === 0 && time_hours.value === 0 && time_mins.value === 0 && time_secs.value === 0) {
//         t === true
//     } else if(time_secs.value != 0) {
//         time_secs.value--
//     } else if(time_mins.value != 0 && time_secs.value == 0) {
//         time_secs.value = 59;
//         time_mins.value--;
//     } else if(time_hours.value != 0 && time_mins.value == 0) {
//         time_mins.value = 60;
//         time_hours.value--;
//     }else if(time_days.value != 0 && time_hours.value == 0) {
//         time_hours.value = 24;
//         time_days.value--;
//     }
//     return
// }

// function congratulations () {

//     time_el.classList.remove("timer-count")
//     con_text_el = document.createElement("div")
//     con_text_el.classList.add("con")

//     con_h = document.createElement("h1")
//     con_h.classList.add("con-text")
//     con_h.innerText = "Hey!! TIME IS UP"
//     con_text_el.appendChild(con_h)

//     time_el.appendChild(con_text_el);
// }

// function start() {
//     if (interval) {
//         return 
//     }
//     interval = setInterval(timer, 1000)
//     // .then(() => {return (congratulations, 1000)
//     // .then(() => {
//     //     alert("Please set timer")
//     // })
//     // });
//     time_days.setAttribute("readonly", "readonly")
//     time_hours.setAttribute("readonly", "readonly")
//     time_mins.setAttribute("readonly", "readonly")
//     time_secs.setAttribute("readonly", "readonly")
       
//         }
            
    


// function stop() {
//     clearInterval(interval);
//     interval = null
    
// }

// function reset() {
//     stop();
//     time_days.value = 00;
//     time_hours.value = 00;
//     time_mins.value = 00;
//     time_secs.value = 00;
//     time_days.removeAttribute("readonly", "readonly")
//     time_hours.removeAttribute("readonly", "readonly")
//     time_mins.removeAttribute("readonly", "readonly")
//     time_secs.removeAttribute("readonly", "readonly")
// }

// time_el.addEventListener("keypress", (e) => {
//     if(e.key === "Enter") {
//         start()
//     }
// })

// function congratulations() {
//     if(time_days.value = 00 ) {
//         congrats_el.classList.remove("timer")
//     } else {
//         start()
//     }
// }