let extension = [".com.mx", ".lat", ".org.mx", ".net", ".cc", ".tv"];
let adjetives = ["happy", "very", "best", "cool", "epic"];
let extensionForAdjetives = [".com", ".mx"];


function generateRandom(min = 0, max = 4) {
  // find diff
  let difference = max - min;
  // generate random number 
  let rand = Math.random();
  // multiply with difference 
  rand = Math.floor( rand * difference);
  // add with min value 
  rand = rand + min;
  return rand;
}

function generateDomain() {
  document.getElementById("listaDominios").innerHTML = "";
  const palabra = document.getElementById('searchName').value;
  alert(palabra);
  //For each extension
  for(let i=0; i<extension.length; i++){
    let nuevoNombre = document.createTextNode( palabra.replace(/\s/g, '') + extension[i]);
    let lista = document.getElementById("listaDominios");
    let elemento = document.createElement("div");
    lista.appendChild(elemento);
    elemento.appendChild(nuevoNombre);
    let seleccionador = document.createElement("input");
    seleccionador.className = "form-check-input";
    seleccionador.setAttribute("type", "radio");
    seleccionador.setAttribute("name", "opcion");
    seleccionador.setAttribute("value", nuevoNombre.textContent);
    elemento.appendChild(seleccionador);
  }
  //For a random number by some adjetives
  for(let i=0; i<extensionForAdjetives.length; i++){
    let numeroRandom = generateRandom();
    console.log(numeroRandom);
    let nuevoNombre = document.createTextNode( adjetives[numeroRandom] + palabra.replace(/\s/g, '') + extensionForAdjetives[i]);
    let lista = document.getElementById("listaDominios");
    let elemento = document.createElement("div");
    lista.appendChild(elemento);
    elemento.appendChild(nuevoNombre);
    let seleccionador = document.createElement("input");
    seleccionador.className = "form-check-input";
    seleccionador.setAttribute("type", "radio");
    seleccionador.setAttribute("name", "opcion");
    seleccionador.setAttribute("value", nuevoNombre.textContent);
    elemento.appendChild(seleccionador);
  }
  //Open AI

}