var altura = 6;
var stairs = "**";
var spaces = "";

for (altura; altura > 0; altura--)
{
    for (var y = altura; y > 0; y--)
    {
        spaces = spaces + " ";
    }
    for (var z = 0; z < altura; z++)
    {
        stairs = stairs + "*";
    }
    console.log(spaces + stairs);
    spaces = "**";
    stairs = "";
}