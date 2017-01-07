/*
	Function: formatNumber

		Takes a string of digits and will format it.

	Parameters:

		Input	- Input string.
		Format	- Format to use. *Default (###) ###-####*

	Usage:

		*Input*

		> phone_format('5556765263');

		*Output*

		> (555) 676-5263
	
	Wiki:

		<https://github.com/mikemrm/Cookbook/wiki/formatNumber_js>
*/
function formatNumber(input, format){
	if(!input)
		return '';
	if(!format)
		format = '(###) ###-####';
	if(format.replace(/\D/g, '').length){
		console.error('Digit not allowed in format string');
		return '';
	}
	var format_parts = format.split(/(#+)/g);
	var format_sections = [];

	var current_position = 0;
	var last_length = 0;

	for(var j = 0; j < format_parts.length; j++){
		if(format_parts[j].length){
			var is_num = format_parts[j].substr(0, 1) == '#';
			if(is_num){
				if(!current_position)
					format_sections.push({'position': 0, 'length': 0, 'prepend': '', 'append': null});
				current_position += format_parts[j].length;
				if(format_sections.length)
					format_sections[format_sections.length - 1].length = format_parts[j].length;
			} else {
				format_sections.push({'position': current_position, 'length': 0, 'prepend': format_parts[j], 'append': (j + 1 == format_parts.length ? format_parts[j + 1] : null)})
			}
		}
	}
	input = input.replace(/\D/g, "");

	var output = '';
	for(var j = 0; j < format_sections.length; j++){
		var section = format_sections[j];
		if(input.length > section.position){
			var section_filled = input.length - section.position - section.length + 1 >= section.length;
			output += section.prepend + input.substr(section.position, section.length);
			if(j + 1 == format_sections.length){
				if(section.append)
					output += section.append;
			}
		}
	}
	return output;
}