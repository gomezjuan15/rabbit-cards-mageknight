
function ParserFactory() {


}

ParserFactory.prototype.getParser = function(cardType) {

    if(cardType === TYPE_FARMER){	
	    return new FarmerCardsParser();
	}else if(cardType === TYPE_RABBIT){	
	    return new RabbitCardsParser();
	}else if(cardType === TYPE_BACK){	
	    return new BackCardsParser();
	}
};