//Creating Cloze cards constructor
exports.ClozeCard = function(text, cloze){
	
	// this will convert strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}

