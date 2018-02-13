//on importe Component car Cities va en hériter (meme dans le meme package)
//on importe le template
import { default as template } from "./climat.component.html";
import { Component } from "../component.component";

export class Climat extends Component {

    /**
   * @constructor
   */
    constructor() {
        //toujours mettre super();
        super();
        this.selector = "climat";
        this.template = template;
    }
}

