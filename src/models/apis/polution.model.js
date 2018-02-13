import { Model } from "./model.model";

/**
* @type{Client}
* le _ devant la variable permet d'eviter de se tromper lors de l'appel
*/

export class Polution extends Model {
    /**
     * @constructor  
     * 
     */
    constructor() {
        super(
         {  
            //c'est du json, c'est comme si c'était écrit "hhumidity":0 ....
            aqi:0,
            pm25 : 0,
            ozone:0
        });    
    }

   

}