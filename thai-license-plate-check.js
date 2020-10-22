function countWords(str) {
    var matches = str.match(/[ก-ฮ]/g);
    return matches ? matches.length : 0;
}
function countNum(str) {
    var matches = str.match(/\d/);
    return matches ? matches.length : 0;
}
function plate_check(p){
	var i = countWords(p);
	var i2 = countNum(p);
    if((i>2||i==0||p.length>7||/\s/.test(p)||i2>4||i2==0)){
    return false;
    }
    return true;
}
