import { Cities } from "./components/cities/cities.component";
import { Climat } from "./components/climat/climat.component";
import { Temperature } from "./components/temperature/temperature.component";
import { Polution } from "./components/polution/polution.component";
import { Meteopolution } from "./components/meteo-polution/meteo-polution.component";

import { Climat as ClimatModel } from "./models/apis/climat.model";
import { Cities as CitiesModel } from "./models/apis/cities.model";
import { Temperature as TemperatureModel } from "./models/apis/temperature.model";
import { Polution as PolutionModel } from "./models/apis/polution.model";
import { ApiOpenWeather } from "./models/apis/api-open-weather.api.model";
//let remplace var

//Apis
let apiOpenWeather = new ApiOpenWeather("b6cb8f2b0d025d091ac629119f466222");

// Models
let citiesModels = new CitiesModel(new PolutionModel, new ClimatModel(new TemperatureModel));

//Component
let citiesComponent = new Cities(citiesModels,apiOpenWeather);
let meteoPolutionComponent = new Meteopolution(new Climat,new Temperature,new Polution);

//render
citiesComponent.render();
meteoPolutionComponent.render();

