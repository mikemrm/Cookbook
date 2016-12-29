/*    
	@licstart  The following is the entire license notice for the 
	JavaScript code in this page.

	Copyright (C) 2014  MikeMRM.com

	The JavaScript code in this page is free software: you can
	redistribute it and/or modify it under the terms of the GNU
	General Public License (GNU GPL) as published by the Free Software
	Foundation, either version 3 of the License, or (at your option)
	any later version.  The code is distributed WITHOUT ANY WARRANTY;
	without even the implied warranty of MERCHANTABILITY or FITNESS
	FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

	As additional permission under GNU GPL version 3 section 7, you
	may distribute non-source (e.g., minimized or compacted) forms of
	that code without the copy of the GNU GPL normally required by
	section 4, provided you include this license notice and a URL
	through which recipients can access the Corresponding Source.


	@licend  The above is the entire license notice
	for the JavaScript code in this page.
*/

function print_r(val, fix, maxDepth){
	var types = {};
	var html = "";
	function getTabs(tabbed){
		var tabs = "";
		for(var j = 0; j < tabbed; j++){
			tabs += "    ";
		}
		return tabs;
	}
	
	function fixAnchors(msg, fixa){
		return (fixa ? msg.replace(/\</g, "&lt;").replace(/\>/g, "&gt;") : msg);
	}
	
	function getList(dict, tabbed){
		if(tabbed > 0) tabbed++;
		if(!maxDepth || tabbed / 2 < maxDepth){
			dictHtml = "Array\n" + getTabs(tabbed) + "(\n";
			for(var key in dict){
				var type = (dict[key].toString != undefined ? dict[key].toString() : typeof(dict[key]));
				if(typeof dict[key] == "object" && type.indexOf('[object HTML') == -1){
					dictHtml += getTabs(tabbed + 1) + "[" + fixAnchors(key, fix) + "] => " + getList(dict[key], tabbed + 1) + "\n";
				} else {
					dictHtml += getTabs(tabbed + 1) + "[" + fixAnchors(key, fix) + "] => " + fixAnchors("" + dict[key], fix) + "\n";
				}
			}
			dictHtml += getTabs(tabbed) + ")\n";
			return dictHtml;
		} else {
			return "" + dict;
		}
	}
	html += (typeof val == "object" ? getList(val, 0) : "" + val);
	return html;
}

