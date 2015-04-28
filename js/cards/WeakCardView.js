

function WeakCardView() {	
	
}
WeakCardView.inheritsFrom( GenericCardView );

WeakCardView.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};


WeakCardView.prototype.buildCardDiv = function(cardObject) {
	
	var cardNode = createNode('div');	
	$(cardNode).addClass('card')
				.addClass(cardObject.cardType);	
	
	var titleNode = createNode('title');
	$(titleNode).addClass('title')
				.text(cardObject.title);
	$(cardNode).append(titleNode);
	
	var imageNode = createNode('img');
	$(imageNode).attr('src', cardObject.image)
			 .addClass('mainImage');
	$(cardNode).append(imageNode);
	
	var descriptionNode = createNode('div');
	$(descriptionNode).addClass('cardDescription')
					  .text(cardObject.description);
	$(cardNode).append(descriptionNode);

	return cardNode;
};