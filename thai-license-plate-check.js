function countWords(str) {
    var matches = str.match(/[ก-ฮ]/g);
    return matches ? matches.length : 0;
}
function plate_check(p){
		var i = countWords(p);
    if((i>2||i==0||p.length>7||/\s/.test(p))&&!p.includes("-")){
    return false;
    }
    return true;
}
