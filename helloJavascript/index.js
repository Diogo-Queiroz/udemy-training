var n1Field = document.getElementById("n1");
var n2Field = document.getElementById("n2");
var resultField = document.getElementById("result");
var questionField = document.getElementById("options").value;
var form = document.getElementById("form");

function calculate(xValue, yValue, question) {
	var p;
	var x;
	var y;

	X * (P / 100) == Y;
	X / Y == (P / 100);
	Y / (P / 100) == X;

	switch(question) {
		case "Y% of X":
			
			p = (y / 100) * x;
			break;
		case "X is Y%":
			break;
		case "% of X is Y":
			break;
		case "X% of what is Y":
			break;
		case "Y% of what is X":
			break;
		default:
			break;
	}

	resultField.innerText = p;
	event.preventDefault;
}

form.addEventListener("submit", calculate(n1Field, n2Field, questionField, event));

// form.addEventListener("submit", function(event) {
	
// 	if (!xField.value || !yField.value)
// 	{
// 		alert("Please enter some values");
// 	}
// 	else
// 	{
// 		var x = parseFloat(xField.value);
// 		var y = parseFloat(yField.value);
// 		console.log("Os valores são X = " + x + " e Y = " + y);

// 		var result = (x / y) * 100;

// 		resultField.innerText = "Result: " + result + "%";
// 		event.preventDefault();
// 	}
// });
