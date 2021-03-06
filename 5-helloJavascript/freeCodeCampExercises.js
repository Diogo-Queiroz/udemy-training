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
/*
//Setup Exercise Falsy Bouncer FreeCodeCamp
var arr = [7, false, null, 0, "", undefined, NaN, "ate", 9, "Eita", true];

var resultado = arr.filter(function(e) {
    return Boolean(e) == true;
});

console.log(resultado);
*/
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
/*
function destroyer(arr) 
{
    // Remove all the values
    var args = Array.from(arguments).slice(1);
    var resultado = arr.filter(function (e) {
        return !args.includes(e);
    })
    return resultado;
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1,5,1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3 ,5)); // [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
console.log(destroyer(["tree", "hambuger", 53], "tree", 53)); // ["hamgurger"]
*/

// Setup Exercise Where do I belong FreeCodeCamp
/**
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 * 
 * For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1
 * because it is greater than 1(index 0), but less than 2 (index 1).
 * 
 * Likewise, getIndexToIns([20, 3, 5], 19) should return 2
 * because once the array has been sorted it will look like
 * [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 * 
 * Remeber to use Read-Search-Ask if you get stuck. Write your own code.
 * 
 * Here are some helpful links:
 * 
 * Array.prototype.sort() -> link(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 */

 /*
function getIndexToIns(arr, num) 
{
    var indexToIns = -1;
    arr.sort(function (a, b) 
    {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] >= num)
        {
            indexToIns = i;
            break;
        }
    }
    if (indexToIns == -1) 
    {
        indexToIns = arr.length;
    }
    return indexToIns;
}

console.log(getIndexToIns([40, 60], 50)) // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2.
console.log(getIndexToIns([40, 60], 50)); // 1.
console.log(getIndexToIns([3, 10, 5], 3)); // 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2.
console.log(getIndexToIns([2, 20, 10], 19)); // 2.
console.log(getIndexToIns([2, 5, 10], 15)); // 3.
*/

// Setup Exercise Diff Two Arrays
/**
 * Compare two arrays and return a new array with any element
 * found in only one of the two arrays, but not both. 
*/
function isBigEnough(value, array) {
    return arr1.indexOf(value) >= 0;
}

function diffArray(arr1, arr2) {
    var newArr = [];
    var biggestArray = [];
    var lowestArray = [];

    if (arr1.length >= arr2.length) {
        biggestArray = arr1;
        lowestArray = arr2;
    } else {
        biggestArray = arr2;
        lowestArray = arr1;
    }

    for (var i = 0; i < biggestArray.length; i++) {
        if (biggestArray.indexOf(lowestArray[i]) == -1) {
            newArr.concat(lowestArray[i]);
        }
    }
    
    return newArr;
}

console.log(diffArray([1,2,3,5], [1,2,3,4,5])); // 4