const analyzeArray = ([...items]) => {
    items.forEach(item => {
        if(typeof(item) !== 'number')
         throw new Error("Can't analyze for non number array items.")
    })
    const length = items.length;
    const average = (items.reduce((sum, item) => sum += item, 0))/length;
    const min = items.reduce((min, item) => {
        if(min > item){
            min = item;
        }
        return min;
    }, Infinity);
    const max = items.reduce((max, item) => {
        if(max < item){
            max = item;
        }
        return max;
    }, -Infinity);
    return {average, min, max, length};
}

export default analyzeArray;