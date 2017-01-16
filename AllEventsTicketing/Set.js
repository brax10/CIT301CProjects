function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   	var resultList = []; // create a resultsList array.

		if(listA === null || listB === null) {
			return null;
		}

		for(var i = 0; i < listA.length; i++) {
			var nextValue = listA[i];

			for(var j=0; j < listB.length; j++) {
				if(listB[j] === nextValue) {
					resultList.push(listB[j]);
					break;
				}
			}
    }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
