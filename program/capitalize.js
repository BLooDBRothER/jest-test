const capitalizeFunction = () => {
    return {firstCharacter, firstCharacterOfEachWord};
}

const firstCharacter = (inputString) => {
    return inputString.replace(/^[a-z]/g, inputString[0].toUpperCase());
}

const firstCharacterOfEachWord = (inputString) => {
    return inputString.split(" ").map(str => firstCharacter(str)).join(" ");
}

const capitalize = capitalizeFunction();

export default capitalize;