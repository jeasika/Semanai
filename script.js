let extension = [".com.mx", ".lat", ".org.mx", ".net", ".cc", ".tv"];

function generateDomain() {
  document.getElementById("listaDominios").innerHTML = "";
  const palabra = document.getElementById('searchName').value;
  alert(palabra);
  for(let i=0; i<extension.length; i++){
    let nuevoNombre = document.createTextNode( palabra.replace(/\s/g, '') + extension[i]);
    let lista = document.getElementById("listaDominios");
    let elemento = document.createElement("div");
    elemento.className = "alert alert-dark";
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