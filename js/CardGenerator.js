
function CardGenerator() {

    this.CARDS_WIDTH = 200;
	this.CARDS_HEIGHT = 280;			 
    this.TOTAL_ROWS = 3;
    this.TOTAL_COLS = 3;
	
	this.ROWS_PER_PAGE = 3;	
}

CardGenerator.prototype.getHtml = function(cardsData){ 

    var cardType = getCardType(),
	    parserFactory = new ParserFactory(),
		cardFactory = new CardFactory(),
	    cardsParser = parserFactory.getParser(cardType),
		cardObjects = cardsParser.parse(cardsData);

	var html = '',
		i;							

	html += "<table class='cardGeneratorTable'>";	
		
	for(i = 0; i < cardObjects.length; i++){
	
	    if(i % this.TOTAL_COLS === 0) {
		    html += TR_O;
		}
	
        var cardObject = cardObjects[i],
			card = cardFactory.getCard(cardType);	
		
		html = html + card.getHtml(cardObject, this.CARDS_WIDTH, this.CARDS_HEIGHT);	
		
	    if(i % this.TOTAL_COLS === (this.TOTAL_COLS - 1)) {
		    html += TR_C;
		}
		
		html += insertPageBreak.call(this, i, cardObjects.length);			
	}
	
	html += "</table>";

	return html;
};

function insertPageBreak(i, totalCards) {
    
	var rowNumber =  Math.floor(i / this.TOTAL_COLS),
	    colNumber = i % this.TOTAL_COLS,
		pageBreak = ''; 
	
	//Needs a page break?
	if((colNumber == (this.TOTAL_COLS - 1)) && 
	   ((rowNumber % this.ROWS_PER_PAGE) === (this.ROWS_PER_PAGE - 1)) &&
	    (i !== totalCards - 1)) { //If there are no more rows to display after this page break, then don't add page break
	    //First page break?		
		var pageBreakClass = getPageBreakClass.call(this, rowNumber);	
		pageBreak += "<TR class='" + pageBreakClass + "'>" + TR_C;
	}
	
	return pageBreak;
}

function getPageBreakClass(rowNumber) {

    var pageNumber = Math.floor(rowNumber / this.ROWS_PER_PAGE) + 1;
	
	if(pageNumber == 1)
        return 'pageBreakFirst';
	
	if(pageNumber % 8 == 0){
	    return 'pageBreakExtraSpace';
	}				  
	
	return 'pageBreakNormal';
}

function getCardType() {

    var e = document.getElementById("cardType");
    var cardType = e.options[e.selectedIndex].value;
	
	return cardType;
}
