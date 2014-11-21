

function BasicCardView() {	

}
BasicCardView.inheritsFrom( GenericCardView );

BasicCardView.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};


BasicCardView.prototype.buildCardDiv = function(cardObject) {
	
	var cardNode = createNode('div');	
	$(cardNode).addClass('card');
	
	var titleNode = createNode('title');
	$(titleNode).addClass('title')
				.addClass(cardObject.cardType)
				.text(cardObject.title);
	$(cardNode).append(titleNode);
	
	var imageNode = createNode('img');
	$(imageNode).attr('src', cardObject.image)
			 .addClass('mainImage');
	$(cardNode).append(imageNode);
	
	var animalTypeNode = createNode('span');
	$(animalTypeNode).addClass('animalType')
	 			 	 .text(cardObject.animalType);
	$(cardNode).append(animalTypeNode);
	
	var descriptionNode = createNode('div');
	$(descriptionNode).addClass('cardDescription')
					  .text(cardObject.description);
	$(cardNode).append(descriptionNode);

	return cardNode;
};