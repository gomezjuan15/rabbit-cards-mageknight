
function FarmerCardObject(title, description, image) {

    this.title = title;
	this.description = description;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_FARMER;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );