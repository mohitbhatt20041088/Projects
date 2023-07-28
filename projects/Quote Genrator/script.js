let apiQuotes=[];

// show new quote
function newQuote(){
    // pick a random quote form api
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}
// Get  quotes from API
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
        // fetch request
        const response=await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote();
    }catch(error){
        alert("somthing wrong");
        // catch errror here
        
    }
}
// on load
getQuotes();