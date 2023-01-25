let form = document.querySelector("form");
let btn = document.querySelector("button");

function calculate() {
  let name = document.querySelector('input[name="nome"]');
  let surname = document.querySelector('input[name="cognome"]');
  let dataDiNascita = document.querySelector('input[name="dataDiNascita"]');
  let height = document.querySelector('input[name="altezza"]');
  let weight = document.querySelector('input[name="peso"]');

  if (
    !name.value ||
    !surname.value ||
    !dataDiNascita.value ||
    !height.value ||
    !weight.value
  ) {
    console.log("to mare omo");
    return;
  }

  let imc = weight.value / Math.pow(height.value / 100, 2);
  console.log(imc);

  let outputDiv = document.createElement('submitDiv');
  
}

btn.addEventListener("click", calculate);
