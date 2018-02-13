import { Model } from "./model.model";

/**
* @type{Client}
* le _ devant la variable permet d'eviter de se tromper lors de l'appel
*/

export class Climat extends Model {
    /**
     * @constructor  
     * @param {Temperature} temperature
     */
    constructor(temperature) {
        super(
         {  
            //c'est du json, c'est comme si c'était écrit "hhumidity":0 ....
            humidity:0,
            wind : 0,
            pressure:0,
            description:"",
            temperature:temperature // c'est égal à "temperature":temperature 
        });    
    }
}