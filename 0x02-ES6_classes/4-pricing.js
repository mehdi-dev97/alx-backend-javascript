import Currency from './3-currency';

export default class Pricing {
    /**
     * Create a new pricing @see {@link Pricing}.
     *
     * @param {Number} amount - amount of pricing.
     * @param {Currency} currency - currency instance.
     */
    constructor (amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    /**
     * Get amount of pricing.
     * 
     * @returns {String}
     */
    get amount () {
        return this._amount;
    }

    /**
     * Set a new amount of pricing.
     */
    set amount (value) {
        if (typeof value !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = value;
    }

    /**
     * Get currency.
     * 
     * @returns {Currency}
     */
    get currency () {
        return this._currency;
    }

    /**
     * Set a new currency of pricing.
     */
    set currency (value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('Currency must be a Currency');
        }
        this._currency = value;
    }

    /**
     * Display full price description.
     * 
     * @returns {String}
     */
    displayFullPrice () {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    /**
     * Display full price description.
     * 
     * @param {Number} amount - amount pricing.
     * @param {Number} conversionRate - conversion rate pricing.
     * 
     * @returns {Number}
     */
    static convertPrice (amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount muste be a number');
        }
        if (typeof conversionRate !== 'number') {
            throw new TypeError('Conversion Rate muste be a number');
        }
        return (amount * conversionRate);
    }
}
