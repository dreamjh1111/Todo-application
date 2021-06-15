const quotes =[
{
    quote: "0",
    author: "0-1",
},
{
    quote: "1",
    author: "1-1",
},
{
    quote: "2",
    author: "2-1",
},
{
    quote: "3",
    author: "3-1",
},
{
    quote: "4",
    author: "4-1",
},
{
    quote: "5",
    author: "5-1",
},
{
    quote: "6",
    author: "6-1",
},
{
    quote: "7",
    author: "7-1",
},
{
    quote: "8",
    author: "8-1",
},
{
    quote: "9",
    author: "9-1",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;