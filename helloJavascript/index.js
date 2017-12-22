var n1Field = document.getElementById("n1");
var n2Field = document.getElementById("n2");
var resultField = document.getElementById("result");
var questionField = document.getElementById("options");
var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
	alert(n1Field.value);
	alert(n2Field.value);
	alert(questionField.value);
	
	if (!n1Field.value || !n2Field.value || !questionField.value)
	{
		alert("Please fulfill all the requirements fields!");
	}
	else 
	{
		var p;
		var x;
		var y;
		switch(questionField.value) 
		{
			case "1":
				x = parseFloat(n1Field.value);
				p = parseFloat(n2Field.value);
				y = x * (p / 100);
				resultField.innerHTML = "The " + p + "% of " + x + " is " + y;
				// event.preventDefault();
				break;
			case "2":
				y = parseFloat(n1Field.value);
				p = parseFloat(n2Field.value);
				x = y / (p / 100);
				resultField.innerHTML = "The " + y + " is " + p + "% of " + x;
				// event.preventDefault();
				break;
			case "3":
				x = parseFloat(n1Field.value);
				y = parseFloat(n2Field.value);
				p = (x / y) * 100;
				resultField.innerHTML = "The percentage of " + x + " over " + y + " is " + p + "%";
				// event.preventDefault();
				break;
			case "4":
				y = parseFloat(n1Field.value);
				p = parseFloat(n2Field.value);
				x = y / (p / 100);
				resultField.innerHTML = "The " + y + " is " + p + "% of " + x;
				// event.preventDefault();
				break;
			case "5":
				x = parseFloat(n1Field.value);
				p = parseFloat(n2Field.value);
				y = x * (p / 100);
				resultField.innerHTML = "The " + p + "% of " + x + " is " + y;
				// event.preventDefault();
				break;
			default:
				alert("Please choose one option to convert");
				break;
		}
	}
	event.preventDefault();
});

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
