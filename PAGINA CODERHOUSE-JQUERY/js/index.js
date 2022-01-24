// Frase de bienvenido

const FraseItems = document.getElementById("frase-h1");
const h1 = document.createElement("h1");
const fragment = document.createDocumentFragment()


h1.textContent = `Bienvenido`;
fragment.appendChild(h1);
FraseItems.appendChild(fragment)

