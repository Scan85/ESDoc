/**
 * This is top article class
 */
export default class Topartikel {

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