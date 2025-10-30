var quote=[
{
    'author': '― Oscar Wilde',
    'quote': '“Be yourself; everyone else is already taken.”'
},
{
    'author': '― Marilyn Monroe',
    'quote': "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
},
{
    'author': '― Frank Zappa',
    'quote': '“So many books, so little time.”'
},
{
    'author': '― Albert Einstein',
    'quote': "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
},
{
    'author': '― Marcus Tullius Cicero',
    'quote': "“A room without books is like a body without a soul.”"
},
{
    'author': '― Elbert Hubbard',
    'quote': "“A friend is someone who knows all about you and still loves you.”"
},
{
    'author': '― Oscar Wilde',
    'quote': "“Always forgive your enemies; nothing annoys them so much.”"
},
{
    'author': '― Mahatma Gandhi',
    'quote': "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
},
{
    'author': '―― Stephen Chbosky',
    'quote': "“We accept the love we think we deserve.”"
},
{
    'author': '― Friedrich Nietzsche',
    'quote': "“Without music, life would be a mistake.”"
},
{
    'author': '― Oscar Wilde',
    'quote': "“I am so clever that sometimes I don't understand a single word of what I am saying.”"
},
{
    'author': '― Ralph Waldo Emerson',
    'quote': "““To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"
},
{
    'author': '― Andre Gide, Autumn Leaves',
    'quote': "“It is better to be hated for what you are than to be loved for what you are not.”"
},
{
    'author': '― Isaac Asimov',
    'quote': "“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”"
},


]
var last = -500;
function generateQuote(){
    var random =  Math.trunc(Math.random() *quote.length);
if (last==random){
    random= Math.trunc(Math.random() *quote.length);
}
last=random;
document.getElementById("quote").innerHTML= `${ quote[random].quote} `;
document.getElementById("author").innerHTML= `${ quote[random].author} `;
}
