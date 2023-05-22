function task09(str) {
    var string = str. toLowerCase();
     const vowels = ["a","e","i","o","u"] ;
   
     var characters = string.split("");
     
     var vowelsFound = [];
     
     for( var i in characters) {
       
       if(vowels.includes(characters[i])){
         vowelsFound.push(characters[i]);
         
       }
     }
     console.log(vowelsFound);
   };
    module.exports = {task09} ;
