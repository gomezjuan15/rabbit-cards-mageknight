
function BasicCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
BasicCardsParser.inheritsFrom( GenericCardsParser );


BasicCardsParser.prototype.createCard = function(attributes) {
    
	var card = new BasicCardObject(attributes[1],
			   	   				   attributes[2],
			   	   				   attributes[3],
			   	   				   attributes[4]);
									  
	return card;
};