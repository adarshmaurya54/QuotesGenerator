// let apikey = "8Liq3QqC97Bnczyi4mI5aQ==xRCEKAnKU3AKyKn9";
// let url = "https://api.api-ninjas.com/v1/quotes";
// const headers = new Headers();
// headers.append('X-Api-Key', apikey);
// headers.append('Content-Type', 'application/json');
const quote = document.getElementById("quote");
const typeName = document.getElementById("type-name");
let url2 = "https://hindi-quotes.vercel.app/random";
// Calling api
function quoteGenerate(){
    fetch(url2)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quote.innerText = data.quote;
        typeName.innerText = data.type;
    })
}
setInterval(function(){
    quoteGenerate();
},120000);
quoteGenerate();
