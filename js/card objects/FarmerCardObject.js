
function FarmerCardObject(title, description, value, cardType, image) {

    this.title = title;
	this.description = description;
	this.value = value;
	this.cardType = cardType.toLowerCase();
	this.image = image ? image : DEFAULT_IMAGE;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );