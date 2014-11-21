
function ItemCardObject(title, description, image, antiTheftLevel) {

    this.title = title;
	this.description = description;
	this.antiTheftLevel = antiTheftLevel;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_ITEM;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );