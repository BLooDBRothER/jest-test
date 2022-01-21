const Caluculator = () => {
    const add = (no1, no2) => {
        return no1 + no2;
    }
    
    const subtract = (no1, no2) => {
        return no1 - no2;
    }
    
    const multiply = (no1, no2) => {
        return no1 * no2;
    }
    
    const divide = (no1, no2) => {
        return no1 / no2;
    }
    return {add, subtract, multiply, divide}
}

const calculator = Caluculator();

export default calculator;