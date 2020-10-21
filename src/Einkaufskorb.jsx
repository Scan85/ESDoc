/**
 * This is the ShoppingCart class
 */
export default class ShoppingCart {

    /**
     * @param {number} a - total discount articles
     * @param {number} b - total discount products
     * @return {number} returns total discounts
     */
    totalDiscounts(a, b) {
        return a + b;
    }

    /**
     * @param {string} totalArticles - total count of all articles
     * @return {number} converts string to number
     */
    stringToNumberConverter(totalArticles) {
        return Number(totalArticles);
    }
}