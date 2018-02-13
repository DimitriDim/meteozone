//on importe Component car Cities va en hériter (meme dans le meme package)
import { Component } from "../component.component";
//on importe le template
import { default as template } from "./temperature.component.html";

export class Temperature extends Component {

    /**
   * @constructor
   */
    constructor() {
        //toujours mettre super();
        super();
        this.selector = "temperature";
        this.template = template;
    }
}