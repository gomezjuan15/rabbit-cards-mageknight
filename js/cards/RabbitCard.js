

function RabbitCard() {	
	this.cardType = TYPE_RABBIT;
}
RabbitCard.inheritsFrom( GenericCard );

RabbitCard.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};

RabbitCard.prototype.buildCardDiv = function(cardObject) {
	
	var html = "<div class='card'>";
	
    html += "<div " + 
	   "class='title " + cardObject.cardType + "'" +		   			   
	   ">" + 
	       cardObject.title + 
	   DIV_C;
    
    html += "<img src='" + cardObject.image + "' class='mainImage'></img>";
		   
	html += "<div " +  
		   "class='cardDescription' " +		  			   
		   ">" + 		   
		       cardObject.description + 
		   DIV_C;
	
	html += DIV_C;
	
	return html;
};