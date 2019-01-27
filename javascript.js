

var quotes = [
  'I\'m not the kind of person who tries to be cool or trendy, I\'m definitely an individual. - Leonardo Dicaprio',
  'Do not take life seriously. You will not get out of it alive. - Elberd Hubbard',
  'It is every man\'s obligation to put back into the world at least the equivalent of what he takes out of it. - Albert Einstein',
  'Whatever you are, be a good one. - Abraham Lincoln',
  'Learn from the mistakes of others. You can\'t live long enough to make them all yourself. - Eleanor Roosevelt',
  'Once we believe in ourselves we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit. - e.e. cummings',
  'Once we believe in ourselves we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit. - Barack Obama',
  'You could warm Mars up, over time, with greenhouse gases. - Elon Musk',


]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}

function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

// change function that chages to a new quote
function change() {
  newQuote()

}

newQuote();

startDate();
// set an interval that calls changes function every 5000ms
setInterval(change, 6000);
