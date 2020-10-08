//You can run the code through the terminal by specifying the path and running the text, "node java.ja"
//Or you can just run it rhought the 'Run code' to output function of visual studious

//-------------------------------------------------------------------------------------------------------------

/*Program which calculates how many sticks would be there in a stick house. One house is 6 sticks but as the amount sticks can 
be calculated with (5 x **value**) - 1:


examples:
(1) = 6
(2) = 11
*/


function matchHouses(step) {
	if (step === 0) {
		return 0;
	} else if(Math.sign(step) === -1) {
		return "";
	}
	var result = (5 * step) + 1;
	return result;
}

console.log(matchHouses(2))
