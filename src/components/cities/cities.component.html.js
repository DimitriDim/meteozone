//Template literal
// literal string
export default (cities) => {


    return `    
    
    <h1 class="mdl-cell mdl-cell--12-col ui col-center">
        <!-- on rajoute une icone -->
        <span class="material-icons">place</span>
    Météo
    <span class="material-icons">wb_sunny</span>
    </h1>
    <h2 id="ville" class="ui col-center">${cities.get("name") ? cities.get("name") : (cities.get("name")!="-" ? `<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>`:"")}</h2>
    <h2 id="temperature" class="ui col-center">${cities.get("climat").get("temperature").get("temp")}
    </h2>
    <!-- Navigation -->
    <div class="mdl-layout__drawer">
        <span class="mdl-cell mdl-cell--12-col">Mon emplacement</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">Ma position</a>
          <a class="mdl-navigation__link" href="">Lyon</a>
          <a class="mdl-navigation__link" href="">Valence</a>
          <a class="mdl-navigation__link" href="">Saint Vallier</a>
        </nav>
    </div>
`;

}