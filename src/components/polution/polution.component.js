//on importe Component car Cities va en hériter (meme dans le meme package)
import { Component } from "../component.component";
//on importe le template
import { default as template } from "./polution.component.html";

export class Polution extends Component {

    /**
   * @constructor
   */
    constructor() {
        //toujours mettre super();
        super();
        this.selector = "polution";
        this.template = template;
    }
}