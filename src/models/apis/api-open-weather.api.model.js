import { ApiToken } from "./api-token.api.model";

/**

* @type{ApiLocation}

*/

export class ApiOpenWeather extends ApiToken {


    /**
     * @param {Number} lat
     * @param {Number} lon
     * @returns {String}
     */

    getEndPoint(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.get("token")}`
    }
}