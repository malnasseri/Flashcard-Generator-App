




//Creating Basic cards constructor
exports.BasicCard = function(front, back) {
	
	this.front = front;
	this.back = back;


}

//Creating Cloze cards constructor
exports.ClozeCard = function(text, cloze){
	
	// this will convert strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {

		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}

