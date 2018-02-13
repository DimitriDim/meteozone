
//on importe Component car Cities va en hériter (meme dans le meme package)
import { Component } from "./../component.component";
//on importe le template
import { default as template } from "./cities.component.html";

export class Cities extends Component {

    /**
   * @constructor
   * @param {Model} model
   * @param {ApiToken} api
   */
    constructor(model, api) {
        //toujours mettre super();
        super();
        this.selector = "cities";
        this.template = template;

        //pour pouvoir recuperer nos membres privés de chaques models
        this.getModel = () => {
            return model;
        }
        this.getApi = () => {
            return api;
        }

        this.getLocation();
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            //passage du context version 2015, plus besoin de bind (mais faire attention c'est qu'avec Babel)
            (e) => {
                this.geolocationSuccess(e.coords.latitude, e.coords.longitude);
            },
            //OU passage du context version 1995
            function (e) {
                this.exception("Geolocalisation", "can\'t determine you position");
                //si pas de no locate: arret
             
            }.bind(this)
        );
    }

    probleme(){
        this.getModel().set("name", "-");
        this.getModel().get("climat").get("temperature").set("temp", "-");
        this.render();
    }

    geolocationSuccess(lat, lng) {

        //concept AJAX
        window.ui.dialog.alert('Success', 'Vous etes localisé').onconfirm();
        //Faire une reqeutte
        var xhr = new XMLHttpRequest;
        //le flux open(methode, adresse,...)
        var apiPolution = `https://api.breezometer.com/baqi/?lat=${lat}&lon=${lng}&key=34e6ae4599684edbb13ae121cd84fcd7`;
        xhr.open("GET", this.getApi().getEndPoint(lat, lng));
        // Les evenements: 
        // le programme continue quand meme le temps du traitement
        // un des deux sera appelé(ok ou erreur)
        //() =>{ rapel: version 2015 pour .bind le context
        xhr.onload = () => {
            
            if (200 == xhr.status) {
                //tranforme le texte en objet
                let reponse = window.JSON.parse(xhr.response);
                this.getModel().set("name", reponse.name);
                this.getModel().set("sunset", reponse.sys.sunset);
                this.getModel().set("sunrise", reponse.sys.sunrise);

                this.getModel().get("climat").set("humidity", reponse.main.humidity);
                this.getModel().get("climat").set("wind", reponse.wind.speed);
                this.getModel().get("climat").set("humidity", reponse.main.pression);
                this.getModel().get("climat").set("description", reponse.weather[0].main);

                this.getModel().get("climat").get("temperature").set("min", reponse.main.temp_min);
                this.getModel().get("climat").get("temperature").set("max", reponse.main.temp_max);
                this.getModel().get("climat").get("temperature").set("temp", reponse.main.temp);

                /*
                let degresStr = " °C";
                console.log(JSON.parse(xhr.responseText)['name']);
                document.getElementById("ville").innerHTML = JSON.parse(xhr.responseText)['name'];
                document.getElementById("Vent").innerHTML = JSON.parse(xhr.responseText)['wind']['speed'];
                document.getElementById("humide").innerHTML = JSON.parse(xhr.responseText)['main']['humidity'];
                document.getElementById("temperature").innerHTML = (JSON.parse(xhr.responseText)['main']['temp']) + degresStr;
                document.getElementById("diffTemp").innerHTML = (JSON.parse(xhr.responseText)['main']['temp_max']) - (JSON.parse(xhr.responseText)['main']['temp_min']) + degresStr;
                */
                this.render();
                return;
            } xhr.onerror();
        }

        xhr.onerror = () => {
            this.exception("Informations",
                "Je ne peux pas lire les infos de retour",
                "Retry",
                () => { 
                    this.getModel().set("name", "");
                    this.render();
                    this.geolocationSuccess(lat, lng); });
        };
        xhr.send();

        //polution
        var xhrPol = new XMLHttpRequest;
        xhrPol.open("GET", apiPolution);
        // Les evenements: 
        // le programme continue quand meme le temps du traitement
        // un des deux sera appelé(ok ou erreur)
        //() =>{ rrapel: version 2015 pour .bind le context
        xhrPol.onload = () => {
            if (200 == xhrPol.status) {
                document.getElementById("qualityAir").innerHTML = JSON.parse(xhrPol.responseText)['breezometer_description'];
                document.getElementById("qualityAir").style.background = JSON.parse(xhrPol.responseText)['breezometer_color'];
                document.getElementById("dominPoluant").innerHTML = JSON.parse(xhrPol.responseText)['dominant_pollutant_description'];
                document.getElementById("causes").innerHTML = JSON.parse(xhrPol.responseText)['dominant_pollutant_text']['causes'];
                document.getElementById("infoEnfants").innerHTML = JSON.parse(xhrPol.responseText)['random_recommendations']['children'];
                return;
            } xhrPol.onerror();
        }

        xhrPol.onerror = () => {
            this.exception("Informations",
                "Je ne peux pas lire les infos de retour",
                "Retry",
                () => { thisgeolocationSuccess(lat, lng); });
        };
        xhrPol.send();

    }

    exception(title, message, btnText, confirm) {
        window.ui.dialog.alert(title, message).onconfirm(btnText, confirm);
        this.probleme();
    }


    render() {
        //on surcharge render
        //et
        //on recupere l'element retourné dans le render de component.component (render parent)
        let elements = super.render([this.getModel()]);

        //itération pour updgrader le menu
        //se trouve dans la doc
        for (let i = 0, l =elements.length ; i < l; i++) {
            window.componentHandler.downgradeElements(elements[i]);
            window.componentHandler.upgradeDom();
        }
    }

}