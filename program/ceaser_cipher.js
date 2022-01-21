const returnAscii = (char) => char.charCodeAt(char);

const returnChar = (ascii) => String.fromCharCode(ascii);

const returnEncodedAscii = (char, key) => {
    const ascii = returnAscii(char);
    const plainIndex = ascii - 97;
    const encodedIndex = ((plainIndex + key) % 26) + 97;
    return encodedIndex;
}

const returnDecodedAscii = (char, key) => {
    const ascii = returnAscii(char);
    const cipherIndex = ascii - 97;
    const decodedIndex = ((((cipherIndex - key)%26) + 26) % 26) + 97;
    return decodedIndex;
}

const getEncodedChar = (char, key) => returnChar(returnEncodedAscii(char, key));

const getDecodedChar = (char, key) => returnChar(returnDecodedAscii(char, key));


const Cipher = () => {
    const encrypt = (plainText, key) => {
        key = key % 26;
        let cipherText = "";
        plainText = plainText.toLowerCase();
        for(const eachChar of plainText){
            cipherText += !eachChar.match(/[a-z]/i) ? eachChar : getEncodedChar(eachChar, key);
        }
        return cipherText;
    }

    const decrypt = (cipherText, key) => {
        key = key % 26;
        let plainText = "";
        for(const eachChar of cipherText){
            plainText += !eachChar.match(/[a-z]/i) ? eachChar : getDecodedChar(eachChar, key);
        }
        return plainText;
    }

    return {encrypt, decrypt};
}

const cipher = Cipher();

export default cipher;
