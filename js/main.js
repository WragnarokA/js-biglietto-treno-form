
let prezzoPerKm = 0.21;
const buttom = document.getElementById("genera")
const annulla = document.getElementById("reset")

buttom.addEventListener("click", function () {

    let nome = document.getElementById("name").value;
    let km = parseInt(document.getElementById("km").value);


    if (isNaN(km)) {
        console.error("Non è un numero");
    }

    console.log(`${nome} farà ${km} km`);

    prezzoDelBiglietto = km * prezzoPerKm; 
   
    
    let fasciaEta = document.getElementById("fasciaEta").value;
    let offerta = "Biglietto Standar"

    if (fasciaEta=="1") {
        offerta = "Biglietto minorenne"
        prezzoDelBiglietto *= 0.8
    } else if (fasciaEta=="3") {
        offerta = "Biglietto senior"
        prezzoDelBiglietto *= 0.6
    } 
    prezzoDelBiglietto = prezzoDelBiglietto.toFixed(2);
    console.log(`${offerta}, di € ${prezzoDelBiglietto}`);

    document.getElementById("passeggero").innerText = nome;
    document.getElementById("offertaFinale").innerText = offerta;
    document.getElementById("costoBiglietto").innerText = prezzoDelBiglietto;
  
        
} )

annulla.addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fasciaEta").value = "";
    
})


        




        
    