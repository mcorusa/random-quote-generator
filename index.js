const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL ="https://api.quotable.io/random";


//event koji osluskujemo, ocekujemo je click, a kada se dogodi click
//zelimo triggerati funkciju getQuote()

async function getQuote(){
    //console.log("clicked");
    //koristimo metodu fetch
    //kreiramo konstantu response
    // moramo cekati odgovor prije nego sto ga pretvorimo u json
    try{
        btnEl.innerText="loading..";
        btnEl.disabled=true;
        quoteEl.innerHTML="loading.."
        authorEl.innerHTML="loading..";
        
        const response = await fetch(apiURL);
        //ovo moramo pretvoriti u json file
        const data = await response.json();
        console.log(data);
        const randomQuote = data.content;
        const authorQuote = data.author;
        quoteEl.innerText=randomQuote;
        authorEl.innerText="~ "+authorQuote;
        btnEl.disabled=false;
        btnEl.innerHTML="GET A QUOTE";
    }   catch(error){
            quoteEl.innerText="An error occured. Try again later!";
            authorEl.innerHTML="";
            btnEl.disabled=false;
        }


};
//getQuote();

btnEl.addEventListener("click", getQuote);