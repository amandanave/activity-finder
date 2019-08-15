// https://palett.es/api

let chosenColor = 'fabada' //color chosen by user
let startingColorEl = document.querySelector('.chosen-color')
 startingColorEl.innerHTML = `chosen color: ${chosenColor}`
startingColorEl.style.backgroundColor = `#${chosenColor}`
 // colorItem.setAttribute('class','color')

let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `https://palett.es/API/v1/palette/from/${chosenColor}`

fetch(proxyUrl + targetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(colors) {
    console.log(colors);
  let container = document.querySelector('.container')
    for (let color of colors){
      console.log(color)
       let colorItem = document.createElement('li');
      colorItem.innerHTML = color
      colorItem.style.backgroundColor = `${color}`
      colorItem.setAttribute('class','color')
      container.append(colorItem)
      
    }
  });
  var colorWell;
  var defaultColor = "#fabada";
  window.addEventListener("load", startup, false);
  function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }