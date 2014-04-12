var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', main);

function main(error, data) {
	if (error) throw error;

	var parsed = data.split("\n");
	var size = parsed[0];
	var counter = 0;

	while (counter < size) {
		var offset = counter*10;
		var answer1 = parseInt(parsed[1 + offset]);
		var row1 = parsed[answer1 + 1 + offset].split(" ");

		var answer2 = parseInt(parsed[6 + offset]);
		var row2 = parsed[answer2 + 6 + offset].split(" ");

		var count = 0;
		var output = 0;
		for (var i = 0; i < 4; i++) {
			if(row2.indexOf(row1[i]) != -1) {
				count++
				output = row1[i];
			}
		}
		if (count === 0) {
			console.log("Case #" + (counter+1) + ": Volunteer cheated!")
		} else if (count === 1) {
			console.log("Case #" + (counter+1) + ": " + output);
		} else if (count > 1) {
			console.log("Case #" + (counter+1) + ": Bad magician!")
		}
		counter++;
	}
}

