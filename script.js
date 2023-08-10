
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
},60000); 
quoteGenerate();
