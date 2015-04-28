
function TrapCardObject(title, threatLevel, effect1, effect2, image) {

    this.title = title;
	this.threatLevel = threatLevel;
	this.effect1 = effect1;
	this.effect2 = effect2;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_TRAP;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );