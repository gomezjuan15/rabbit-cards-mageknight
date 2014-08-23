

function GenericCard() {
}

GenericCard.prototype.getHtml = function(cardObject, width, height, caller) { 
    var html = "<td " + 
			   "class='genericTd " + caller.cardType + "'" +	
			   "width='" + width + "px' " +
			   "height='" + height + "px' " +				   
			   ">" + 	
			   	   caller.buildCardDiv(cardObject) +
				   //cardTypeDiv(caller) +
			   TD_C;
	
	return html;
};

GenericCard.prototype.buildCardDiv = function(cardObject) {
    var html = "<div " + 
			   "class='title' " +		   			   
			   ">" + 
			       cardObject.title + 
			   DIV_C;
	
	html += "<div " +  
			   "class='description' " +		  			   
			   ">" + 
			       cardObject.description + 
			   DIV_C;
	
	return html;
};

function cardTypeDiv(caller) {
    var html = "<div " + 
			   "class='cardType' " +		   			   
			   ">" + 
			       caller.cardType + 
			   DIV_C;

	return html;			   
}