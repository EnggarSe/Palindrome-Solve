function palindrome(text){
    var textNoSpace = text.replace(/[\s]/g,'').toLowerCase();
    var arrayText1 = [];
    var arrayText2 = [];
    var arrayReverse = [];
    var status = "";
    var count = 0;
    for(var i = 0 ; i<textNoSpace.length ; i++){
        arrayText1.push(textNoSpace.charAt(i));
        arrayText2.push(textNoSpace.charAt(i));
    }
    arrayReverse = arrayText1.reverse();
    for(var j = 0 ; j<arrayReverse.length ; j++){
        if(arrayReverse[j]==arrayText2[j]){
            count+=1
            if(count==arrayReverse.length){
                status = `this ${text} is a palindrome`
            }
            else{
                status = `this ${text} is not a palindrome`
            }
        }    
    }
    return status;
}
console.log(palindrome("Never Odd Or Even"));
