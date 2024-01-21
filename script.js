const qoute = document.getElementById("qoute");
const author=document.getElementById("author");
//add api
const api_url="https://api.quotable.io/random";

//get data from api
async function getqoute(url){
    const response=await fetch(url);
    var data =await response.json();
    console.log(data);
    qoute.innerHTML=data.content;
    author.innerHTML=data.author;

}

getqoute(api_url);

//to see in twitter
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+qoute.innerHTML + "---by "+ author.innerHTML,"Tweet Window","width=600","height=300");
}
