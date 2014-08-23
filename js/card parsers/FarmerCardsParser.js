
function FarmerCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
FarmerCardsParser.inheritsFrom( GenericCardsParser );


FarmerCardsParser.prototype.createCard = function(attributes) {
    
	var card = new FarmerCardObject(attributes[1],
			   	   				    attributes[2],
			   	   				    attributes[3],
			   	   				    attributes[4],
			   	   				    attributes[5]);
									  
	return card;
};