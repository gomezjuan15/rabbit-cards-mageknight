
function PoisonCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
PoisonCardsParser.inheritsFrom( GenericCardsParser );


PoisonCardsParser.prototype.createCard = function(attributes) {
    
	var card = new PoisonCardObject(attributes[1],
			   	   				  attributes[2],
			   	   				  attributes[3],
			   	   				  attributes[4]);
									  
	return card;
};