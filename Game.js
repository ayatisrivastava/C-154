AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {
            type: "string",
            default: "#ring1"
        }
    },
    init: function () {
        var duration = 120;
        var timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
    },
    startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (duration >=0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
        }, 1000)
    },
    update: function(){
        this.isCollided(this.data.elementId)
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide", e => {
            if(elementId.includes("#ring")){
                console.log(elementId+"collision")
            }
            else if(elementId.includes("#hurdle")){
                console.log(elementId+"collision")
            }
        })
    }
})