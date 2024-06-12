
Module.register("MMM-Ternary-clock", {
	// define variables used by module, but not in

  defaults: {
    color: "white",
  },

  getStyles: function() { return ["MMM-Ternary-clock.css"]},
  getScripts: function(){ return ["ternary-clock.js"]},
	getDom: function(){
		let div = document.createElement('div')
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		div.id="main"
		svg.id='svgBox'
		div.appendChild(svg)

    let handle = setInterval(()=>{
      let svgBox = document.getElementById("svgBox");
      if(svgBox != null){
        clearInterval(handle);
        startClock(this.config.color);
      }
  }, 1000);

		return div
		//return '<div id="main"><svg id="svgBox" xmlns="http://www.w3.org/2000/svg"></svg>'
	}

})