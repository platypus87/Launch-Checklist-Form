// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then(function(json){
               const div = document.getElementById("missionTarget");
               let planet = Math.round(Math.random()*5);
               div.innerHTML = `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[planet].name}</li>
                     <li>Diameter: ${json[planet].diameter}</li>
                     <li>Star: ${json[planet].star}</li>
                     <li>Distance from Earth: ${json[planet].distance}</li>
                     <li>Number of Moons: ${json[planet].moons}</li>
                  </ol>
                  <img src="${json[planet].image}"></img>
                  `;
            });   
         });

   let button = document.querySelector("button");
   button.addEventListener("click",function(event){
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel");
      let mass = document.querySelector("input[name=cargoMass]");
      let items = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStat = document.getElementById("fuelStatus");
      let cargoStat = document.getElementById("cargoStatus");

      if (isNaN(pilot.value)===false){
         alert(`${pilot.value} is an invalid entry, please try again.`);
         event.preventDefault();
      }
      else if(isNaN(copilot.value)===false){
         alert(`${copilot.value} is not a valid entry.`);
         event.preventDefault();
      }
      else if(isNaN(fuel.value)===true){
         alert(`${fuel.value} is an invald entry.`);
         event.preventDefault();
      }
      else if(fuel.value<10000){
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `${fuel.value} L is not enough fuel!`;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         items.style.visibility = "visible";
         alert(`${fuel.value} L is not enough fuel!`);
         event.preventDefault();
      }
      else if(isNaN(mass.value)===true){
         alert(`${mass.value} is an invalid entry.`)
         event.preventDefault();
      }
      else if(mass.value>10000){
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `${fuel.value} is sufficient for launch.`;
         cargoStat.innerHTML = `${mass.value} kg is to heavy to launch!`
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         items.style.visibility = "visible";
         alert(`You're gonna need a bigger boat; ${mass.value} kg is too heavy.`)
         event.preventDefault();
      } else {
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `${fuel.value} is sufficient for launch.`;
         cargoStat.innerHTML = `${mass.value} kg is light enough to launch!`
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         items.style.visibility = "visible";
         event.preventDefault();
      }
   });
});