// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then(function(json){
               const div = document.getElementById("missionTarget");
               let planet = Math.round(Math.random()*6);
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


      if(pilot.value === ""||copilot.value==="" || isNaN(pilot.value)===false || isNaN(copilot.value)===false){
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `Fuel: ${fuel.value} L`;
         cargoStat.innerHTML = `Cargo Mass: ${mass.value} kg`;
        //items.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         //launchStatus.style.color = "red";
         alert("Invalid Input");
         event.preventDefault();
      }else if(isNaN(fuel.value)===true){
         alert('Enter a number for fuel');
         event.preventDefault();
      }else if(fuel.value<10000){
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `Fuel: ${fuel.value} L`;
         cargoStat.innerHTML = `Cargo Mass: ${mass.value} kg`;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         items.style.visibility = "visible";
         alert("Insufficient Fuel");
         event.preventDefault();
      }else if(isNaN(mass.value)===true){
         alert("Enter a number for mass");
         event.preventDefault();
      }
      else if(mass.value>10000){
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `Fuel: ${fuel.value} L`;
         cargoStat.innerHTML = `Cargo Mass: ${mass.value} kg`;
         items.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         items.style.visibility = "visible";
         alert("You're gonna need a bigger boat");
         event.preventDefault();
      }else if (pilot.value !== "" && copilot.value !== "" && fuel.value > 10000 && mass.value < 10000){
         items.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;   
         copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
         fuelStat.innerHTML = `Fuel: ${fuel.value} L`;
         cargoStat.innerHTML = `Cargo mass low enough for launch`;
         launchStatus.innerHTML = "Shuttle ready for launch";
         launchStatus.style.color = "green";
         // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         //    response.json().then(function(json){
         //       const div = document.getElementById("missionTarget");
         //       let planet = Math.round(Math.random()*6);
         //       div.innerHTML = `
         //       <h2>Mission Destination</h2>
         //          <ol>
         //             <li>Name: ${json[planet].name}</li>
         //             <li>Diameter: ${json[planet].diameter}</li>
         //             <li>Star: ${json[planet].star}</li>
         //             <li>Distance from Earth: ${json[planet].distance}</li>
         //             <li>Number of Moons: ${json[planet].moons}</li>
         //          </ol>
         //          <img src="${json[planet].image}"></img>
         //          `;
         //    });   
         // });
         event.preventDefault();
      }   
   });
   
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
//             response.json().then(function(json){
//                const div = document.getElementById("missionTarget");
//                let planet = Math.round(Math.random()*6);
//                div.innerHTML = `
//                <h2>Mission Destination</h2>
//                   <ol>
//                      <li>Name: ${json[planet].name}</li>
//                      <li>Diameter: ${json[planet].diameter}</li>
//                      <li>Star: ${json[planet].star}</li>
//                      <li>Distance from Earth: ${json[planet].distance}</li>
//                      <li>Number of Moons: ${json[planet].moons}</li>
//                   </ol>
//                   <img src="${json[planet].image}"></img>
//                   `;
//             });   
//          });