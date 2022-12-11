var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
 // return quote without author
console.log(Quote.getRandomQuote());

console.log(cowsay.say({
    text :Quote.getRandomQuote() ,
    e : "oO",
    T : "U "
}));