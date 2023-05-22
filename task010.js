function task010(str1, str2) {
    var characters1 = str1. toLowerCase(). replace(/[^a-z]+/g, '');
    var characters2 = str2. toLowerCase(). replace(/[^a-z]+/g, '');
    
    var string1 = characters1.split('').sort();
    var string2 = characters2.split('').sort();
    
    var commonLetters = [];
    
    for (let i = 0; i < string1. length; i ++){
      if (commonLetters. indexOf(string1[i]) === - 1) {
      if (string2. indexOf(string1[i]) !== - 1){ commonLetters += string1[i];
    }
    }
    } 
    
    if (commonLetters.length < 1){
      result = "no common letters";
    } else if (commonLetters.length === 1){
      result = commonLetters;
    } else if (commonLetters === 2 ){
      result = commonLetters[0] + " and " + commonLetters[1];
    } else {
      var last = commonLetters.split("").pop("");
    result = commonLetters. split(""). slice(0,-1).join(', ') + ' and '+last;
    } 
    console. log(result);
    };
    module. exports = { task010 } ;
