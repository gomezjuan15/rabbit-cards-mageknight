
function RabbitCardObject(title, description, cardType, image) {

    this.title = title;
	this.description = description;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = cardType.toLowerCase();
}

//MischiefCardObject.inheritsFrom( GenericCardObject );