
function WeakCardObject(title, description, image) {

    this.title = title;
	this.description = description;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_WEAK;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );