Array.prototype.equals = function( array ) {
  
  return this.length === array.length &&
         this.every( function(this_i,i) { return this_i === array[i] } )  
  }

var setOperations = new Set();

QUnit.test( "Intersection Test", function( assert ) {
    var listA = ['Bill', 'Mary','Peter','Sam','Mark','Ann','Susan', 'Mike',
			           'James', 'Steve', 'Joseph', 'Jane', 'Bob', 'Wayne', 'Connie',
                 'Jim', 'Bridger', 'Luke', 'Issac', 'Emma', 'Ruth'];

    var listB = ['Mary','Sam','Ann', 'Peter', 'Annabelle', 'Harriet',
                 'Bridger', 'Issac', 'Emma', 'Luke', 'Ruth', 'Joseph',
                 'James', 'Jean' ];
    
    var expectedList = ['Mary','Peter','Sam','Ann', 'James', 'Joseph',
                        'Bridger', 'Luke', 'Issac', 'Emma', 'Ruth'];
    
    assert.ok(expectedList.equals(setOperations.intersection(listA, listB)));
    assert.equal(setOperations.intersection(null, listB), null);
    assert.equal(setOperations.intersection(listA, null), null);
    assert.equal(setOperations.intersection([], listB).length, 0);
    assert.equal(setOperations.intersection(listA, []).length, 0);
              
   
});



QUnit.test( "Relative Compliment Test", function( assert ) {
    var listA = ['Bill', 'Mary','Peter','Sam','Mark','Ann','Susan', 'Mike',
                 'James', 'Steve', 'Joseph', 'Jane', 'Bob', 'Wayne', 'Connie',
                 'Jim', 'Bridger', 'Luke', 'Issac', 'Emma', 'Ruth'];

    var listB = ['Mary','Sam','Ann', 'Peter', 'Annabelle', 'Harriet',
                 'Bridger', 'Issac', 'Emma', 'Luke', 'Ruth', 'Joseph',
                 'James', 'Jean' ];
    
    var expectedList = ['Bill', 'Mark','Susan', 'Mike', 'Steve', 'Jane',
                        'Bob', 'Wayne', 'Connie', 'Jim' ];
    
    assert.ok(expectedList.equals(setOperations.relativeCompliment(listA, listB)));
    assert.equal(setOperations.relativeComplement(null, listB), null);
    assert.equal(setOperations.relativeComplement(listA, null), null);
    assert.equal(setOperations.relativeComplement([], listB).length, 0);
    assert.ok(listA.equals(setOperations.relativeComplement(listA, [])));
              
   
});



QUnit.test( "Union Test", function( assert ) {
    var listA = ['Bill', 'Mary','Peter','Sam','Mark','Ann','Susan', 'Mike',
                 'James', 'Steve', 'Joseph', 'Jane', 'Bob', 'Wayne', 'Connie',
                 'Jim', 'Bridger', 'Luke', 'Issac', 'Emma', 'Ruth'];

    var listB = ['Mary','Sam','Ann', 'Peter', 'Annabelle', 'Harriet',
                 'Bridger', 'Issac', 'Emma', 'Luke', 'Ruth', 'Joseph',
                 'James', 'Jean' ];
    
    var expectedList = ['Bill', 'Mary','Peter','Sam','Mark','Ann','Susan', 'Mike',
                        'James', 'Steve', 'Joseph', 'Jane', 'Bob', 'Wayne', 'Connie',
                        'Jim', 'Bridger', 'Luke', 'Issac', 'Emma', 'Ruth',
                        'Annabelle', 'Harriet', 'Jean'];
    
    assert.ok(expectedList.equals(setOperations.union(listA, listB)));
    assert.equal(setOperations.union(null, listB), null);
    assert.equal(setOperations.union(listA, null), null);
    assert.ok(listB.equals(setOperations.union([], listB)));
    assert.ok(listA.equals(setOperations.union(listA, [])));
              
   
});



QUnit.test( "Symetric Difference Test", function( assert ) {
    var listA = ['Bill', 'Mary','Peter','Sam','Mark','Ann','Susan', 'Mike',
                 'James', 'Steve', 'Joseph', 'Jane', 'Bob', 'Wayne', 'Connie',
                 'Jim', 'Bridger', 'Luke', 'Issac', 'Emma', 'Ruth'];

    var listB = ['Mary','Sam','Ann', 'Peter', 'Annabelle', 'Harriet',
                 'Bridger', 'Issac', 'Emma', 'Luke', 'Ruth', 'Joseph',
                 'James', 'Jean' ];
    
    var expectedList = ['Bill', 'Mark', 'Susan', 'Mike',
                        'Steve', 'Jane', 'Bob', 'Wayne', 'Connie',
                        'Jim', 'Annabelle', 'Harriet', 'Jean'];  

    assert.ok(expectedList.equals(setOperations.symmetricDifference(listA, listB)));
    assert.equal(setOperations.symmetricDifference(null, listB), null);
    assert.equal(setOperations.symmetricDifference(listA, null), null);
    assert.ok(listB.equals(setOperations.symmetricDifference([], listB)));
    assert.ok(listA.equals(setOperations.symmetricDifference(listA, [])));
              
   
});


