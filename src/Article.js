/**
 * This is the Article class which creates an article
 */
export default class Article {

    /**
     * Constructor for ShoppingCart class
     * @param {string} article - article name 
     * @param {int} amount - amount of selected articles (1-x)
     * @param {number} price - price of article
     * @param {int} discount - discount in %
     */
    constructor(article, amount, price, discount) {
        this.article = article;
        this.amount = amount;
        this.price = price;
        this.discount = discount;
    }

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