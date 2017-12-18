/*var linhas = 42;
var textRow = "";
var timeNow = Date.now();

for (var i = 0; i < linhas; i++)
{
    var valor = 1;
    for (var j = 1; j < (linhas - i); j++)
    {
        textRow = textRow + " ";
        //console.log(" ");
    }
    for (var k = 0; k <= i; k++)
    {
        //console.log("   "+valor);
        textRow = textRow + " " + valor;
        valor = valor * (i - k) / (k + 1);
    }
    console.log(textRow);
    textRow = "";
}

var timeResult = timeNow - Date.now();
console.log("The test take " + timeResult + "seconds");*/

/*
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line

    var index = -1;
    for (var i = 0; i < contacts.length; i++)
    {
        if (contacts[i].firstName == firstName)
        {
            index = i;
        }
    }
    if (index == -1)
    {
        return "No Such Contact";
    }
    if (!contacts[index].hasOwnProperty(prop))
    {
        return "No Such Property";
    }
    return contacts[index][prop];
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Harry", "number"));
console.log(lookUpProfile("Diogo", "likes"));
console.log(lookUpProfile("Sherlock", "lastName"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Kristian", "belongins"));
*/

/*
//Setup Exercise Mutation FreeCodeCamp
function mutation(arr) {

    var primeiraPalavra = arr[0].toUpperCase();
    var segundaPalavra = arr[1].toUpperCase();
    var tamanhoSegundaPalavra = segundaPalavra.length;
    for (var i = 0; i < tamanhoSegundaPalavra; i++) {
        console.log("Para a letra " + segundaPalavra[i] + " o index é " + primeiraPalavra.indexOf(segundaPalavra[i]));
        if (primeiraPalavra.indexOf(segundaPalavra[i]) === -1) {
            return false
        }
    }
    return true;
  }
  
console.log(mutation(["hello", "hey"])); // False
console.log(mutation(["hello", "Hello"])); // True
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //True
console.log(mutation(["Mary", "Army"])); // True
console.log(mutation(["Mary", "Aarmy"])); // True
console.log(mutation(["Alien", "line"])); // True
console.log(mutation(["floor", "for"])); // True
console.log(mutation(["hello", "neo"])); // False
console.log(mutation(["voodoo", "no"])); // False

console.log("Hello".toUpperCase().indexOf("e".toUpperCase()));
*/

//Setup Exercise Falsy Bouncer FreeCodeCamp
var arr = [7, false, null, 0, "", undefined, NaN, "ate", 9, "Eita", true];

var resultado = arr.filter(function(e) {
    return Boolean(e) == true;
});

console.log(resultado);

// Setup Exercise Seek and Destroy FreeCodeCamp
/**
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments. 
 * Remove all elements from the initial array that are of the same value as these arguments.
 * 
 * Remember to use Read-Search-Ask if you get stuck. Write your own code.
 * 
 * Here are some helpful links:
 * 
 * Arguments object -> link(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
 * Array.prototype.filter() -> link(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 */
function destroyer(arr) {
    // Remove all the values
    return arr;
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1,5,1]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3 ,5)); // [1]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // []
console.log(destroyer(["tree", "hambuger", 53], "tree", 53)); // ["hamgurger"]