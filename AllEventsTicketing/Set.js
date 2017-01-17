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
	};

	this.union = function(listA, listB) {

        var resultList = []; // create a resultsList array.

        if(listA === null || listB === null) {
            return null;
        }

		var symmetricDiff = this.symmetricDifference(listA, listB);
		var intersection = this.intersection(listA, listB);

		resultList = symmetricDiff.concat(intersection);

	   return resultList;
	};

	this.relativeComplement = function(listA, listB) {

        var resultList = []; // create a resultsList array.

        if(listA === null || listB === null) {
            return null;
        }

		// Find the relative complement of listB/listA.
        for(var a = 0; a < listA.length; a ++) {
			var nextLAValue = listA[a];
			var valuesMatch = false;

            for(var i = 0; i < listB.length; i++) {
                if(listB[i] === nextLAValue) {
                    valuesMatch = true;
                }
            }

            if(!valuesMatch) {
            	resultList.push(nextLAValue);
			}
        }

	   return resultList;
	};

	this.symmetricDifference = function(listA, listB) {

        var resultList = []; // create a resultsList array.

        if(listA === null || listB === null) {
            return null;
        }

		var relCompA = this.relativeComplement(listA, listB);
		var relCompB = this.relativeComplement(listB, listA);

		resultList = relCompA.concat(relCompB);

	   return resultList;
	};
}
