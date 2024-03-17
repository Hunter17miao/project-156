AFRAME.registerComponent("game-play", {
    schema:{
        elementId:{type:"string", default:"#coin"}
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },

    init: function () {
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
      },
    
      startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        var timer = setInterval(countDown, 1000);
    
        function countDown() {
          if (duration >= 0) {
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
          else {
            clearInterval(timer);        
          }
        }
      },

    isCollided:function(elementId){
        const element= document.querySelector(elementId)

        element.addEventListener("collide", (e) => { 
            
            if (elementId.includes("#coin")) { 
                console.log(elementId + " collision"); 
            } 
            else if (elementId.includes("#coins")) {
                 console.log("point!"); 
            } 
                });
          },

        updateTarget: function (){
            var element = document.querySelector("#targets")
            var count = element.getAttribute("text").value
            let currentTargets = parseInt(count) 
            currentTargets = currentTargets-1
            element.setAttribute("text", {value: currentTargets})
          },
        
          updateScore: function (){
            var element = document.querySelector("#score")
            var count = element.getAttribute("text").value
            let currentScore = parseInt(count) 
            currentScore = currentScore + 50
            element.setAttribute("text", {value: currentScore})
          },
        
          gameOver: function (){
            var planetE1 = document.querySelector("#planet_model")
            var element = document.querySelector("#game_over_text")
            element.setAttribute("visible", true)
            planetE1.setAttribute("dynamic-body", {mass: 1})
          },

});


