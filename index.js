function displayquote() {
   var Quotes = [
        'Website without visitors is like a ship lost in the horizon.' ,
        'Being first in the search result organically in Google is the dream of all website owners.' ,
        'Getting a quality website is not an expenses but rather an investment.',
        'Websites promote you 24/7: No employee will do that.' ,
        'If you think math is hard, try web design.' ,
        'Work is Worship.'
];
    var randomIndex = Math.floor(Math.random()*Quotes.length)
    var randomMessage = Quotes[randomIndex]
    var message = document.getElementById("btn") 
    message.innerHTML = randomMessage
}