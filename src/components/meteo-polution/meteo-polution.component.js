import { MetaComponent } from "./../metacomponent.component";
export class Meteopolution extends MetaComponent {
    /**
    * @constructor
    */
    constructor(climat,temperature,polution) {
        super();
        this.component = [climat,temperature,polution];

    }
}