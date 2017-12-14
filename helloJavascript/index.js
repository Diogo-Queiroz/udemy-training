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
