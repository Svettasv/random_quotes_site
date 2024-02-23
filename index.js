let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The way to get started is to quit talking and begin doing"`,
    person: `Walt Disney`,
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams"`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"You must be the change you wish to see in the world"`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `"Be yourself; everyone else is already taken"`,
    person: `Oscar Wilde`,
  },
  {
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`,
  },
  {
    quote: `"The only impossible journey is the one you never begin"`,
    person: `Tony Robbins`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
