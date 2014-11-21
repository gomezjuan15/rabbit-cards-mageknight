
function StrongCardObject(title, description, image, cost) {

    this.title = title;
	this.description = description;
	this.cost = cost;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_STRONG;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );