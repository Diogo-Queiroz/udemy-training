var linhas = 42;
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
console.log("The test take " + timeResult + "seconds");