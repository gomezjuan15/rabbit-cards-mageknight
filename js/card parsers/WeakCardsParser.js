
function WeakCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
WeakCardsParser.inheritsFrom( GenericCardsParser );


WeakCardsParser.prototype.createCard = function(attributes) {
    
	var card = new WeakCardObject(attributes[1],
			   	   				  attributes[2],
			   	   				  attributes[3]);
									  
	return card;
};