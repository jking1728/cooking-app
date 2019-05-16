var gallon = function(inputLiter) {
	return inputLiter / 3.785;
}

var liters = function(inputGallon) {
	return inputGallon * 3.785;
}

var inputLiter = parseInt(prompt("Convert Liters to Gallons:"))
var inputGallon = parseInt(prompt("Convert Gallons to Liters:"))

var result = gallon(inputLiter)
alert(result)
