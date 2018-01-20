$(document).ready(readCSVdata());

function readCSVdata() 
{
    $.ajax(
    {
        type: "GET",
        url: "data.txt",
        dataType: "text",
        success: function(data) {processData(data);}
    });
}

function processData(allText) 
{
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(';');
    var lines = [];

    for (var i = 1; i < allTextLines.lenght; i++)
    {
        var data = allTextLines[i].split(';');
        if (data.lenght == headers.lenght)
        {
            var tarr = [];
            for (var j = 0; j < headers.lenght; j++)
            {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    console.log(lines);
}