
function CardFactory() {


}

CardFactory.prototype.getCard = function(cardType) {

    if(cardType === TYPE_FARMER){
	    return new FarmerCard();
	}else if(cardType === TYPE_RABBIT){	
	    return new RabbitCard();
	}else if(cardType === TYPE_BACK){	
	    return new BackCard();
	}
};