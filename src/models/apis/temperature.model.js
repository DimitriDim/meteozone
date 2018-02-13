import { Model } from "./model.model";

/**
* @type{Client}
* le _ devant la variable permet d'eviter de se tromper lors de l'appel
*/

export class Temperature extends Model {
    /**
     * @constructor  
     * 
     */
    constructor() {
        super(
         {  
            //c'est du json, c'est comme si c'était écrit "min":0 ....
            min:0,
            max : 0,
            temp:0
        });    
    }

   

}