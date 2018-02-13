import { Component } from "./component.component";

export class MetaComponent extends Component {

  /**
   * @constructor
   */
    constructor() {
        super();
        this.component;
    }

    //les méthodes
    render() {
        
        //render parent
        super.render();
        if(this.component){

            for(let i = 0; i < this.component.length; i++){
                this.component[i].render();
            }

        }

    }
}