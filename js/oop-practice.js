/*eslint-env browser*/

//STEP 1
/*
function Cat() {};

var Dog = function() {};
*/


//STEP 2
/*
var tabby = new Cat();
var huskie = new Dog();
*/
//STEP 3
/*
function Animal() {
    "use strict";
    window.console.log("The Animal has been created");
}
*/

//STEP 4
/*
function Animal() {
    "use strict";
    window.console.log("The Animal has been created");
}
var dog = new Animal();
window.console.log(dog.constructor);
*/

//STEP 5
/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    window.console.log("The animal is: " + this.height + " tall " + this.length + " long " + this.color + " " + this.breed + " " + this.type);
}

var myAnimal = new Animal("dog", "huskie", "black", "2ft", "3ft");
*/

//STEP 6
/*
var Animal = function (type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};

var myAnimal = new Animal();
for (var property in myAnimal) {
    window.console.log(property);
}
*/
//STEP 7
/*
var Animal = function (type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
    
Animal.prototype.Speak = function () {
    "use strict";
    if (this.type === "dog") {
        return ("The " + this.color + " dog is barking!");
    } else if (this.type === "cat") {
        return ("The " + this.color + " cat is meowing!");
    } else {
        return ("The animals are quiet!");
    }
};

var myAnimal = new Animal("dog", "huskie", "white", "2ft", "3ft");
window.console.log(myAnimal.Speak());
var myAnimal1 = new Animal("cat", "tabby", "black", "1ft", "2ft");
window.console.log(myAnimal1.Speak());
*/


//STEP 8 
/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;

    this.checkType = function () {
        if (this.type === "dog") {
            return ("dog");
        } else {
            return ("cat");
        }
    };
}
Animal.prototype.Speak = function () {
    "use strict";
    return this.checkType();
};
var myAnimal = new Animal("dog", "huskie", "white", "2ft", "3ft");
window.console.log("The " + myAnimal.Speak() + " has made noise");
var myAnimal1 = new Animal("bird", "dove", "white", "10in", "6in");
window.console.log("The " + myAnimal1.Speak() + " has made noise");
*/


//STEP 9

var StringText = function (text, searchWord) {
    "use strict";
    this.text = text;
    this.searchWord = searchWord;

    this.getWords = function (text) {
        var words, newtext;
        //REMOVE ALL SPECIAL CHARACTERS FROM TEXT
        newtext = this.text.replace(/,/g, "");
        newtext = this.text.replace(/:/g, "");
        newtext = this.text.replace(/,/g, "");
        newtext = this.text.replace(/\./g, "");
        newtext = this.text.toLowerCase();
        //CONVERT TEXT TO ARRAY
        words = newtext.split(" ");
        words.sort();
        return words;
    };

    this.getcountWord = function (words) {
        var i, countWords = [];
        countWords.push(words[0]);
        for (i = 0; i < words.length; i += 1) {
            if (words[i] !== words[i-1]) {
                countWords.push(words[i]);
            }
        }
        return countWords.length;
    };
}

StringText.prototype.findWords = function (splitWord, includeWord) {
    "use strict";
    splitWord = this.searchWord.split();
    includeWord = this.text.includes(splitWord);
    if (includeWord === true) {
        
        return ("Your word " + "'" + splitWord + "'" + " was a match");
    } else {
        return ("Sorry, your word did not have a match");
    }
};
var myString = new StringText("The quick brown fox jumps over the lazy dog.", "the");
window.console.log(myString.findWords());
window.console.log(myString.getcountWord());



