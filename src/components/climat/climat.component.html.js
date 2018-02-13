//Template literal
export default (cities) => {

  console.log(cities);

  return `    
  
<div class="ui bg-blue-200 col-4 humidity">
    Humidité
    <span class="light icon material-icons item">bubble_chart</span>
    <br>
    <span id="humide">45km/h</span>
    <br>
  </div>
</div>
  </div>
  <div class="ui bg-blue-300 col-4 humidity">
    Wind
    <span class="light icon material-icons item">toys</span>
    <br>
    <span id="Vent">45km/h</span>
    <br>
  </div>
  <div class="ui bg-blue-400 col-4 humidity">
    Difference
    <span class="light icon material-icons item">import_export</span>
    <br>
    <span id="diffTemp">8°</span>
  </div>
`;

}