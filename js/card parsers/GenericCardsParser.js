

function GenericCardsParser() {

}

GenericCardsParser.prototype.parse = function (cardsData, caller) {
        var cardLines = cardsData.split(/\r\n|\r|\n/g),
    		cardLine,
			cardObjects = [],
    		i;
    	
    	for(i = 0; i < cardLines.length; i++) {
    	    cardLine = cardLines[i];
    		parseLine.call(this, cardLine, cardObjects, caller);
    	}
		
		return cardObjects;
};

function parseLine(cardLine, cardObjects, caller) {
    var attributes = cardLine.split(CARDS_ATT_TOKENIZER),
		quantity = attributes[0],
		i;
	
	var templateCard = caller.createCard(attributes);
	
	for(i = 0; i < quantity; i++){
	    var instanceCard;
		instanceCard = $.extend( true, {}, templateCard );
		cardObjects.push(instanceCard);
	}
}



