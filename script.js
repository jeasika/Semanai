let extension = [".com.mx", ".lat", ".org.mx", ".net", ".cc", ".tv"];
let adjetives = ["happy", "very", "best", "cool", "epic"];
let extensionForAdjetives = [".com", ".mx"];
const {readFileSync, promises: fsPromises} = require('fs');

//Read file
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
    return arr;
  } catch (err) {
    console.log(err);
  }
}

//Function to generate a random number
function generateRandom(min = 0, max = 5) {
  let difference = max - min;
  // generate random number 
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  return rand;
}

//Function to generate domain name options
function generateDomain() {
  asyncReadFile('D:\Jesik\Documents\GitHub\Semanai\List_Dom.csv');
  document.getElementById("listaDominios").innerHTML = "";
  const palabra = document.getElementById('searchName').value;
  alert(palabra);

  //For each extension
  for(let i=0; i<extension.length; i++){
    let nuevoNombre = document.createTextNode( palabra.replace(/\s/g, '') + extension[i]);
    //Si existe nuevo nombre
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