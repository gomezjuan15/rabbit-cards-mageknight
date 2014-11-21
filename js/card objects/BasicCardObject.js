
function BasicCardObject(title, description, animalType, image) {

    this.title = title;
	this.description = description;
	this.animalType = animalType.toLowerCase();	
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_BASIC;	
}

//MischiefCardObject.inheritsFrom( GenericCardObject );