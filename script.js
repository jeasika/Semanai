let data = ["prolace.net", "cardiotrace.lat", "friomaya.net", "idiomachino.net", "upc.lat", "protege.lat", "maceta.lat", "colegioolinca.net", "renta.lat", "copyfunnels.lat", "neuroalimentacion.net", "dondever.net", "evolitivo.cc", "hayashi.lat", "dobot.lat", "soulzenter.lat", "endemika.lat", "dolartrac.cc", "intelissarh.lat", "e-watch.tv", "gsb.lat", "matribu.lat", "consumibles.lat", "estrasol.lat", "laticinio.lat", "flores.lat", "terramarusa.cc", "cotailor.net", "enrecluta.net", "luliloopsy.lat", "tutarjeta.lat", "torrechapultepec.net", "smartbike.tv", "henequeneros.cc", "nog.lat", "mercadoabierto.net", "intercamseguros.lat", "pricetravel.lat", "skipware.net", "tutiendaenred.net"];
let extension = [".com.mx", ".lat", ".org.mx", ".net", ".cc", ".tv"];
let adjetives = ["happy", "very", "best", "cool", "epic"];
let extensionForAdjetives = [".com", ".mx"];

//Function to validate words
function available(word){
  for(let i=0; i<data.length; i++){
    console.log(data[i]);
    if (word == data[i]){
      console.log("DUPLICADO");
      return false;
    }
    else {
      return true;
    }
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
  document.getElementById("listaDominios").innerHTML = "";
  const palabra = document.getElementById('searchName').value;
  //alert(palabra);
  //console.log(available(palabra));

  //For each extension
  for(let i=0; i<extension.length; i++){
    let nuevoNombre = document.createTextNode( palabra.replace(/\s/g, '') + extension[i]);
    //Si existe nuevo nombre
    console.log(nuevoNombre);
    if (available(nuevoNombre) == false){
      console.log(nuevoNombre);
    }
    else{
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

  //for(let i=0; i<data.length; i++){
    //console.log(data[i]);
  //}
  //Open AI

}