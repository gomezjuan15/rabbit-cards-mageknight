
function PoisonCardObject(title, antidote, effect, image) {

    this.title = title;
	this.antidote=antidote;
	this.effect = effect;
	this.image = image ? image : DEFAULT_IMAGE;
	this.cardType = TYPE_POISON;
}

//MischiefCardObject.inheritsFrom( GenericCardObject );