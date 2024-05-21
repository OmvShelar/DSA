function ispalindrome(str){
    let rev = "";
    for (let i=str.length-1; i>=0; i--){

        rev += str[i];
       
    }
    console.log(rev);
    if (rev == str){
        return true;
    }else{
        return false;
    }
}
const string1 = ispalindrome("Arnav");
console.log(string1);
         