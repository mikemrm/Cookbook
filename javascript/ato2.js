/*
	Function: ato2

		Translates letters to their corresponding number on a phone.

	Parameters:

		text	- String to be converted

	Usage:

		*Input*

		> ato2("(123) MRM-LAND");

		*Output*

		> (123) 676-5263
	
	Wiki:

		<https://github.com/mikemrm/Cookbook/wiki/ato2_js>
*/
function ato2(text){
	var conv = [
		{'reg': /^[abc]$/ig,	'digit': 2},
		{'reg': /^[def]$/ig,	'digit': 3},
		{'reg': /^[ghi]$/ig,	'digit': 4},
		{'reg': /^[jkl]$/ig,	'digit': 5},
		{'reg': /^[mno]$/ig,	'digit': 6},
		{'reg': /^[pqrs]$/ig,	'digit': 7},
		{'reg': /^[tuv]$/ig,	'digit': 8},
		{'reg': /^[wxyz]$/ig,	'digit': 9}
	];
	var res = "";
	for(var j = 0; j < text.length; j++){
		var c = text[j];
		var found = false;
		for(var k = 0; k < conv.length; k++){
			if(c.match(conv[k]['reg'])){
				res += conv[k]['digit'];
				found = true;
				break;
			}
		}
		if(!found){
			res += c;
		}
	}
	return res;
}
