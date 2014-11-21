

function GenericCardView() {
}

GenericCardView.prototype.getHtml = function(cardObject, width, height, caller) {
	
	var tableCellNode = createNode('td');
	$(tableCellNode).addClass('genericTd')
				    .attr('width', width)
				    .attr('height', height);
	
	var tableCellContentNode = $(caller.buildCardDiv(cardObject));
	$(tableCellNode).append(tableCellContentNode);
	
	return tableCellNode;
};

GenericCardView.prototype.buildCardDiv = function(cardObject) {
    var html = "<div " + 
			   "class='title' " +		   			   
			   ">" + 
			       cardObject.title + 
			   DIV_C;
	
	html += "<div " +  
			   "class='description' " +		  			   
			   ">" + 
			       cardObject.description + 
			   DIV_C;
	
	return html;
};

function cardTypeDiv(caller) {
    var html = "<div " + 
			   "class='cardType' " +		   			   
			   ">" + 
			       caller.cardType + 
			   DIV_C;

	return html;			   
}