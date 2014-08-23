

function BackCard() {	
	this.cardType = TYPE_BACK;
}
BackCard.inheritsFrom( GenericCard );

BackCard.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};

BackCard.prototype.buildCardDiv = function(cardObject) {
	
	var html = "<div class='card'>";
    
    html += "<img src='" + cardObject.image + "' class='backImage'></img>";
	
	html += DIV_C;
	
	return html;
};