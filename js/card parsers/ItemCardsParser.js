
function ItemCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
ItemCardsParser.inheritsFrom( GenericCardsParser );


ItemCardsParser.prototype.createCard = function(attributes) {
    
	var card = new ItemCardObject(attributes[1],
			   	   				  attributes[2],
			   	   				  attributes[3],
			   	   				  attributes[4]);
									  
	return card;
};