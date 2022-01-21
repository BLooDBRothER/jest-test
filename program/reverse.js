const reverseString = (inputString) => {
    let reverseStr = "";
    for(let i=inputString.length-1; i>=0; i--){
        reverseStr += inputString[i];
    }
    return reverseStr;
}
export default reverseString;