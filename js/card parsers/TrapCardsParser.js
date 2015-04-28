
function TrapCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
TrapCardsParser.inheritsFrom( GenericCardsParser );


TrapCardsParser.prototype.createCard = function(attributes) {
    
	var card = new TrapCardObject(attributes[1],
			   	   				  attributes[2],
			   	   				  attributes[3],
			   	   				  attributes[4],
			   	   				  attributes[5]);
									  
	return card;
};