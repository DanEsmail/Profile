var rockQuote = [
    {Quote:"Rock n roll is about drugs.", Author:"-Marilyn Manson"},
    {Quote:"I hope the guy who came up with the phrase 'sex, drugs and rock ‘n’ roll' rots in hell, I’d like to change it so it makes more sense: ‘sex, death and rock ‘n’ roll.", Author:"-Gene Simmons"},
    {Quote:"I guess the line between being paranoid and being a rock star is smaller then one would expect.", Author:"-Brian Molko"},
    {Quote:"I love you all; I love you more than life itself, but you’re all fucking mad.", Author:"-Ozzy Osbourne"},
    {Quote:"Kiss is like a smell in a paper bag, they just never go away.", Author:"-Dee Snider"},
    {Quote:"The cliche of what a rock star is - there's something elitist about it. I never related to that. I'm an entertainer. I think of it as, you're performing for people. It's not a self-glorification thing.", Author:"-Beck"},
    {Quote:"You gotta wear the right trousers if you're gonna be a rock star.", Author:"-Chris Martin"},
    {Quote:"I was Marilyn Manson &mdash times 10.", Author:"-Alice Copper"},
    {Quote:"I think record companies are criminals.", Author:"-Jon Bon Jovi"},
    {Quote:"There was a time I thought I couldn’t enjoy rock ‘n’ roll unless I had heroin in me.", Author:"-Joe Perry"},
    {Quote:"When I die, sprinkle my ashes over the 80’s.", Author:"-David Lee Roth"},
    {Quote:"Rock and roll is a nuclear blast of reality in a mundane world where no-one is allowed to be magnificent.", Author:"-Kim Fowley"},
    {Quote:"We believed that anything that was worth doing was worth overdoing.", Author:"-Steven Tyler"},
    {Quote:"We get paid in flesh. Our audiences are sluts and whores, each and every one.", Author:"-Nikki Sixx"},
    {Quote:"I’d rather be dead than cool.", Author:"-kurt Cobain"},
    {Quote:"Darling, my attitude is ‘fuck it’; I’m doing everything with everyone.", Author:"-Freddie Mercury"},
    {Quote:"Jazz, isn’t that just a series of mistakes diguised as musical composition?", Author:"-David St. Hubbins"},
    {Quote:"As a rock star, I have two instincts, I want to have fun, and i want to change the world. I have a chance to do both.", Author:"-Bono"},
    {Quote:"Heavy metal drives me bonkers, it makes me want to vomit, heavy metal really is a pile of puke.", Author:"-Ian Gillan"}
    
];
var num = 0;
var website = "https://twitter.com/intent/tweet?button_hashtag=RockQuotes&text=";

function randomNum(){
    var number = num;
    while(num === number){
    number = Math.floor(Math.random()*20);
    
    }
    return number;
}

function quoteGenerator(number){
    $("#quote").html(rockQuote[number].Quote);
    $("#author").html(rockQuote[number].Author);
    $("#tweet").attr('href', website + rockQuote[number].Quote);
}


$(document).ready(function(){
    quoteGenerator(randomNum());
    $("#button").on('click',function(){
        quoteGenerator(randomNum());
    });
    
});

