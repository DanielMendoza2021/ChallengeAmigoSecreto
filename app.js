let listaAmigos = [];
const lista = document.getElementById("listaAmigos");
const listaResultado = document.getElementById("resultado");
function agregarAmigo(){
lista.innerHTML = "";

    if (document.getElementById('amigo').value.trim() == ""){
  alert("Debes colocar un nombre valido");
  document.getElementById('amigo').innerHTML = "";
  return;
}

listaAmigos.push(document.getElementById('amigo').value); 
     listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
    }); 
    document.getElementById('amigo').value ="";
}

function sortearAmigo(){
    let numeroAmigo = Math.floor(Math.random()*listaAmigos.length)+1;

    const liR = document.createElement("li");
    liR.textContent = listaAmigos[parseInt(numeroAmigo)-1];
    listaResultado.appendChild(liR);
}