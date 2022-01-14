//Made by Ers[Erlénio.RS]
setInterval(()=>{
            let deg = 6;
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            const time = document.querySelector("#time");
            
            var second = document.querySelector("#second");
            var minute = document.getElementById("minute");
            var hour = document.getElementById("hour");
            second.style.transform = `rotateZ(${seconds*deg}deg)`;
            minute.style.transform = `rotateZ(${minutes*deg}deg)`;
            hour.style.transform = `rotateZ(${(hours*30)+((minutes*deg)/12)}deg)`;
            
            let temp = " AM";
            if(hours > 12){
                hours = hours - 12;
                temp = " PM";
            }
            
            minutes = minutes < 10 ? "0"+minutes : minutes;
            hours = hours < 10 ? "0"+hours : hours;
            seconds = seconds < 10 ? "0"+seconds : seconds;
            time.textContent = hours +":"+minutes +":"+ seconds +temp;    
        });
//Made by Ers[Erlénio.RS]
