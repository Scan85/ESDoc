/**
 * This is top article class that contains methods and functions for choosen article list
 */
export default class Topartikel {

    /**
     * Constructor for Topartikel class
     * @param {string} article - article name
     * @param {int} amount - amount of available articles
     * @param {int} position - position in top list
     * @param {int} rating - rating of article
     */
    constructor(article, amount, position, rating) {
        this.article = article;
        this.amount = amount;
        this.position = position;
        this.rating = rating;
    }


    /**
     * @param {number} a - total count of all articles
     * @param {number} b - total count of all posible articles
     * @return {number} result of not shown articles
     */
    notShownArticle(a, b) {
        return a - b;
    }

    /**
     * @param {string} totalArticles - total count of all articles
     * @return {number} converts string to number
     */
    stringToNumberConverter(totalArticles) {
        return Number(totalArticles);
    }
}