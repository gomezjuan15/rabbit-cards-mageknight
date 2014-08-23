

function FarmerCard() {	
	this.cardType = TYPE_FARMER;
}
FarmerCard.inheritsFrom( GenericCard );

FarmerCard.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};


FarmerCard.prototype.buildCardDiv = function(cardObject) {
    
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
	
	
	if(cardObject.value) {
		html += "<div " + 
					"class='cardValue' " +		   			   
				">" + 
			       "<span class='attTitle'>Value: </span>"  +				
					cardObject.value + 
				DIV_C;	
	}
	
	html += DIV_C;
	return html;
};