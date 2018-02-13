// Model du framework Backbone.js
export class Model {
    /**
     * @constructor  
     * @param {object} obj
     */
    constructor(obj) {
        /**
         * @param {String} name  
         * @returns {*}
         */

        this.get = (name, defaultValue) => {
            return obj[name] || defaultValue;
        }
        /**
         * @param {String} name  
         * @returns {*}
         */

        this.set = (name, value) => {
            obj[name] = value;

        }
    }

}