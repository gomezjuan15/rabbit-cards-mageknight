

function BackCardView() {	
	this.cardType = TYPE_BACK;
}
BackCardView.inheritsFrom( GenericCardView );

BackCardView.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};

BackCardView.prototype.buildCardDiv = function(cardObject) {
	
	var cardNode = createNode('div');	
	$(cardNode).addClass('card');
	
	var imageNode = createNode('img');
	$(imageNode).addClass('backImage')
				.attr("src", cardObject.image);
	
	$(cardNode).append(imageNode);
	
	return cardNode;
};