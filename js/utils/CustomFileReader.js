      
	  function customAction(params) {
        $("#cardGeneratorResults").html(function(i,origText) {

		   var cardGenerator = new CardGenerator();	
           return cardGenerator.getHtml(params.cardsData);		  
        });	      
	  }
	  
	  
	  function readSingleFile(evt) {
	  
	    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
		    alert('File API not supported');
			return;
		}
	  
        //Retrieve the first (and only!) File from the FileList object
        var f = evt.target.files[0]; 
    
        if (f) {
          var r = new FileReader();
          r.onload = function(e) {
		      //Global variable
		      cardsData = e.target.result; 
    	      customAction({
			      cardsData: cardsData
			  });			  
          };
          r.readAsText(f);
        } else { 
          alert("Failed to load file");
        }
      }
    
      