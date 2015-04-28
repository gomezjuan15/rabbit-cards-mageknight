
function ParserFactory() {


}

ParserFactory.prototype.getParser = function(cardType) {

    if(cardType === TYPE_FARMER) {	
	    return new FarmerCardsParser();
	}else if(cardType === TYPE_BASIC) {	
	    return new BasicCardsParser();
	}else if(cardType === TYPE_BACK) {	
	    return new BackCardsParser();
	}else if(cardType === TYPE_WEAK) {	
	    return new WeakCardsParser();
	}else if(cardType === TYPE_STRONG) {	
	    return new StrongCardsParser();
	}else if(cardType === TYPE_ITEM) {	
	    return new ItemCardsParser();
	}else if(cardType === TYPE_POISON) {	
	    return new PoisonCardsParser();
	}else if(cardType === TYPE_TRAP) {	
	    return new TrapCardsParser();
	}
};