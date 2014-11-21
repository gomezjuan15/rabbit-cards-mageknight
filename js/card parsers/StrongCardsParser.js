
function StrongCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
StrongCardsParser.inheritsFrom( GenericCardsParser );


StrongCardsParser.prototype.createCard = function(attributes) {
    
	var card = new StrongCardObject(attributes[1],
			   	   				    attributes[2],
			   	   				    attributes[3],
			   	   				    attributes[4]);
									  
	return card;
};