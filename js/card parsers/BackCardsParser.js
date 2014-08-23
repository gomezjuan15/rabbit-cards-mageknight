
function BackCardsParser() {

	this.parse = function (cardsData) {
	
	    return this.parent.parse(cardsData, this);
    };
}
BackCardsParser.inheritsFrom( GenericCardsParser );


BackCardsParser.prototype.createCard = function(attributes) {
    
	var card = new BackCardObject(attributes[1]);
									  
	return card;
};