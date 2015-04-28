
function CardViewFactory() {


}

CardViewFactory.prototype.getCard = function(cardType) {

    if(cardType === TYPE_FARMER) {
	    return new FarmerCardView();
	}else if(cardType === TYPE_BASIC) {	
	    return new BasicCardView();
	}else if(cardType === TYPE_BACK) {	
	    return new BackCardView();
	}else if(cardType === TYPE_STRONG) {	
	    return new StrongCardView();
	}else if(cardType === TYPE_WEAK) {	
	    return new WeakCardView();
	}else if(cardType === TYPE_ITEM) {	
	    return new ItemCardView();
	}else if(cardType === TYPE_POISON) {	
	    return new PoisonCardView();
	}else if(cardType === TYPE_TRAP) {	
	    return new TrapCardView();
	}
};