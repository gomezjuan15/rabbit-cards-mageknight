

function TrapCardView() {	

}
TrapCardView.inheritsFrom( GenericCardView );

TrapCardView.prototype.getHtml = function(cardObject, width, height) {
    return this.parent.getHtml(cardObject, width, height, this);
};


TrapCardView.prototype.buildCardDiv = function(cardObject) {
	
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
			   .text('Threat level: ' + cardObject.threatLevel);
	$(cardNode).append(costNode);
	
	var imageNode = createNode('img');
	$(imageNode).attr('src', cardObject.image)
			 .addClass('mainImage');
	$(cardNode).append(imageNode);
	
	var effect1Node = createNode('div');
	$(effect1Node).addClass('cardEffect1')
					  .text(cardObject.effect1);
	$(cardNode).append(effect1Node);
	
	var effect2Node = createNode('div');
	$(effect2Node).addClass('cardEffect2')
					  .text(cardObject.effect2);
	$(cardNode).append(effect2Node);	

	return cardNode;
};