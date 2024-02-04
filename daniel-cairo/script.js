const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarHex() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    let indiceAl = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAl];
  }
  return colorHex;
}

boton.addEventListener('click', function(){
  let colorGene = generarHex()
  color.textContent = colorGene
  boton.style.background = colorGene
  document.body.style.background = colorGene
  document.body.style.color = colorGene
})
