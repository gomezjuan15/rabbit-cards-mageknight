

function PoisonCardView() {	

}
PoisonCardView.inheritsFrom( GenericCardView );

PoisonCardView.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};


PoisonCardView.prototype.buildCardDiv = function(cardObject) {
	
	var cardNode = createNode('div');	
	$(cardNode).addClass('card')
				.addClass(cardObject.cardType);
	
	var titleNode = createNode('title');
	$(titleNode).addClass('title')
				.text(cardObject.title);
	$(cardNode).append(titleNode);
	
	//TODO: add image background
	var costNode = createNode('div');
	$(costNode).addClass('cost')
			   .text('Antidote: ' + cardObject.antidote);
	$(cardNode).append(costNode);
	
	var imageNode = createNode('img');
	$(imageNode).attr('src', cardObject.image)
			 .addClass('mainImage');
	$(cardNode).append(imageNode);
	
	var descriptionNode = createNode('div');
	$(descriptionNode).addClass('cardPoisonDescription')
					  .text(cardObject.effect);
	$(cardNode).append(descriptionNode);

	return cardNode;
};