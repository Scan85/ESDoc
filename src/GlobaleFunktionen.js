/**
 * This is a block with global test functions which contains a list of functions that converting data types
 */
export default class TestFunktionen {
    /**
     * Function to convert number to string
     * @param {number} number 
     * @return {string} returns converted string  
     */
    NumberToString(number) {
        return number.toString();
    }

    /**
     * Function to convert string to number
     * @param {string} numberString
     * @return {number} returns converted number  
     */
    NumberToString(numberString) {
        return parseFloat(numberString);
    }
}