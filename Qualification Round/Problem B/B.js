var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', main);

var initialrate = 2.0;
var cost = 0.0;
var rate = 0.0;
var required = 0.0;

function main(error, data) {
	if (error) throw error;

	var parsed = data.split("\n");
	var size = parsed[0];
	var counter = 0;

	while (counter < size) {
		var testcase = parsed[counter+1].split(" ");
		cost = parseFloat(testcase[0]);
		rate = parseFloat(testcase[1]);
		required = parseFloat(testcase[2]);

		var n = 0;
		while (totalcost(n) > totalcost(n+1)) {
			n++;
		}
		console.log("Case #" + (counter+1) + ": " + totalcost(n).toFixed(7))
		counter++;
	}
}

function totalcost(number) {
	return ((required / (initialrate + (number*rate))) + costoffarms(number));
}

function costoffarms(number) {
	if(number === 0) {
		return 0;
	} else {
		return (cost / (initialrate + ((number-1) * rate))) + costoffarms(number-1);
	}
}
