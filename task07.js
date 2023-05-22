unction task07() {
function celsiusToFahrenheit (num){
    var answerInFahrenheit = num * 1.8 + 32
    return answerInFahrenheit;
};

function fahrenheitToCelsius (num) {
    var answerInCelsius = (num - 32) * .5556
    return answerInCelsius;
};
}; 
 module.exports = {task07};
