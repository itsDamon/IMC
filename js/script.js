let form = document.querySelector("form");
let btn = document.querySelector("button");

function calculate() {
  let toHidden = document.getElementsByClassName("fa-regular");
  for (let index = 0; index < toHidden.length; index++) {
    const element = toHidden[index];
    element.style.display = "none";
  }
  console.log(toHidden);
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
    return;
  }

  let imc = weight.value / Math.pow(height.value / 100, 2);

  let outputDiv = document.getElementById('submitDiv');
  const output = document.getElementById('output');
  stringa = name.value + " " + surname.value + " il tuo IMC è " + imc.toPrecision(4);
  output.innerHTML = stringa;

  console.log(outputDiv);

  if (imc <= 18.5){
    outputDiv.style.backgroundColor = "var(--sottopeso)";
    document.getElementById('sottopeso').style.display = 'inline-block';
  }
  else if (imc <= 24.9){
    outputDiv.style.backgroundColor = "var(--normopeso)";
    document.getElementById('normopeso').style.display = 'inline-block';
    
  }
  else if (imc <= 29.9){
    outputDiv.style.backgroundColor = "var(--sovrappeso)";
    document.getElementById('sovrappeso').style.display = 'inline-block';
    
  }
  else if (imc <= 34.9){
    outputDiv.style.backgroundColor = "var(--obeso)";
    document.getElementById('obeso').style.display = 'inline-block';
    
  }
  else {
    outputDiv.style.backgroundColor = "var(--estremamenteObeso)";
    document.getElementById('estremamenteObeso').style.display = 'inline-block';
    
  }
  
    console.log(outputDiv);

}

btn.addEventListener("click", calculate);
