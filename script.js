





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
                sound.play()
                clearInterval(interval); 
                
            } 
            input.value =""
            
           
        }

        let sound = new
            Audio("mysounds.wav")
            sound.currentTime = 0

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
                count_el.innerText = "00h : 00m : 00s"
                sound.pause()
                sound = null
                counter = 0
        }

        
        input.addEventListener("keypress", (e) => {
                if(e.key === "Enter") {
                    start()
                }
            })

        interval = null;

    })

})





























