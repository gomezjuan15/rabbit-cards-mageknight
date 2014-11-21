
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
		cardFactory = new CardViewFactory(),
	    cardsParser = parserFactory.getParser(cardType),
		cardObjects = cardsParser.parse(cardsData),
		tableNode = createNode('table'),
		rowNode,
		i;	
	
	$(tableNode).addClass('cardGeneratorTable');	
		
	for(i = 0; i < cardObjects.length; i++){
		
	    if(i % this.TOTAL_COLS === 0) {
	    	rowNode = createNode('tr');
	    	$(tableNode).append(rowNode);
		}		

        var cardObject = cardObjects[i],
			card = cardFactory.getCard(cardType);	//TODO: move this outside of loop
		
		var cardNode = card.getHtml(cardObject, this.CARDS_WIDTH, this.CARDS_HEIGHT);
		$(rowNode).append(cardNode);
		
		$(tableNode).append(insertPageBreak.call(this, i, cardObjects.length));			
	}

	return tableNode;
};

function insertPageBreak(i, totalCards) {
    
	var rowNumber =  Math.floor(i / this.TOTAL_COLS),
	    colNumber = i % this.TOTAL_COLS,
		pageBreak = createNode('tr'); 
	
	//Needs a page break?
	if((colNumber == (this.TOTAL_COLS - 1)) && 
	   ((rowNumber % this.ROWS_PER_PAGE) === (this.ROWS_PER_PAGE - 1)) &&
	    (i !== totalCards - 1)) { //If there are no more rows to display after this page break, then don't add page break
	    //First page break?		
		$(pageBreak).addClass(getPageBreakClass.call(this, rowNumber));
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
