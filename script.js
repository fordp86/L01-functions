//alert("It's working!");

// var welcome = "Hello There!";
// console.log(welcome);

// let greeting = "Hello Human!";
// greeting = "Good Morning!";
// console.log(greeting);

// const constant = "I am a constant variable!";
// console.log(constant);

function sayHello(){
    console.log("Hello!");
}

function add(a, b){
    return a + b;
}

let result = add(2,3);
console.log(result);

function numToString(num){
    var str = num .toString();
    console.log(str);
}

let myNum = 25;
numToString(myNum);

function strLength(myString){
    var num = myString.length;
    console.log(num);
}

var bday = "Happy Birthday!";
strLength(bday);

function findFavorite(myString){
    var num = myString.indexOf("favorite");
    console.log(num);
}

var pizzaStr = "Pizza is my favorite food.";
findFavorite(pizzaStr);

function upperCase(myString){
    var upperString = myString.toUpperCase();
    console.log(upperString);
}

var sentence = "It is a wonderful day!";
upperCase(sentence);

function lowerCase(myString){
    var lowerString = myString.toLowerCase();
    console.log(lowerString);
}

var sentence2 = "It is a WONDERFUL day!";
lowerCase(sentence2);

function splitSpaces(str){
    var reslt = str.split(" ");
    console.log(reslt);
}

var myStr = "How are you doing today?";
splitSpaces(myStr);

var a = "10";
var b = "20";
var c = parseInt(a) + parseInt(b);
console.log(c);

function wordSearcher(sentence,word){
    sentence = sentence.toLowerCase();

    word = word.toLowerCase();

    let wordsInSentence = sentence.split(" ");

    let searchIndex = wordsInSentence.indexOf(word);

    if(searchIndex < 0){
        console.log("Word was not found.");
    }else{
        console.log("Word found at pos " + searchIndex);
    }
}

wordSearcher("London is a great big city","city");

wordSearcher("Life is like a box of chocolates","water");