function task09(num){
    var hourNumber = num / 60;
    var hourNumber = parseInt(hourNumber);
    var minuteNumber = num - (60*hourNumber)
    var minuteNumber = parseInt(minuteNumber) ;
    if (hourNumber === 1 && minuteNumber === 1){
      return hourNumber + " hour, " + minuteNumber + " minute";
    } else if (hourNumber === 1) {
      return hourNumber + " hour, " + minuteNumber + " minutes";
    } else if (minuteNumber ===1 ) {
      return hourNumber + " hours, " + minuteNumber + " minute"
    }  else {
      return hourNumber + " hours, " + minuteNumber + " minutes";
    }
    } ;
    module.exports = { task09 } ;
