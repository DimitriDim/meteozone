import { Model } from "./model.model";

/**
* @type{Client}
* le _ devant la variable permet d'eviter de se tromper lors de l'appel
*/

export class Cities extends Model {
    /**
     * @constructor  
     * @param {Climat} climat
     *  @param {Polution} polution
     */
    constructor(polution,climat) {
        super(
         {  
            //c'est du json, c'est comme si c'était écrit "hhumidity":0 ....
            name:"",
            sunrise : 0,
            polution:polution,
            sunset:"",
            climat:climat // c'est égal à "climat":climat 
        });    
    }

   

}