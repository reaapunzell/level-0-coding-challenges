function task05(a,b,c){
    var s = (a + b + c) / 2;
    var  areaSq = s*(s-a)*(s-b)*(s-c);
    var area = Math.sqrt(areaSq);
    return area;
}
module.exports = { task05 };
