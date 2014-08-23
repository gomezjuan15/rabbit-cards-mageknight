
function RabbitCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
RabbitCardsParser.inheritsFrom( GenericCardsParser );


RabbitCardsParser.prototype.createCard = function(attributes) {
    
	var card = new RabbitCardObject(attributes[1],
			   	   				    attributes[2],
			   	   				    attributes[3],
			   	   				    attributes[4]);
									  
	return card;
};