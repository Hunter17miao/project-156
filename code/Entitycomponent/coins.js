// Registering component in Collider.js
AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coins${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.coins(id, position);
      }
    },
    coins: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#terrain");
  
      //creating the bird model entity
      var coinEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      coinEl.setAttribute("id", id);
  
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      //set the gLTF model attribute
      coinEl.setAttribute("gltf-model", "./models/coin/scene.gltf");
      
  
      coinE1.setAttribute("static-body", {
        shape:"sphere",
        sphereRadius:2
      })
      coinE1.setAttribute("game-play", {
        elementId:`#${id}`
      })
      
      //append the bird entity as the child of the terrain entity
      terrainEl.appendChild(coinEl);
    },
  });
  