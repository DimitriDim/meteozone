//Template literal
export default () => {

    return `    

    <!-- Image card -->
    <div class="demo-card-image mdl-card mdl-shadow--2dp polution">
      <div class="mdl-card__actions">
        <span class="demo-card-image__filename">Qualité de l'air</span>
      </div>
      <div id="qualityAir" class="mdl-card__title mdl-card--expand"></div>
    </div>

    <div class="demo-card-image mdl-card mdl-shadow--2dp">
      <div class="mdl-card__actions">
        <span class="demo-card-image__filename">Poluant dominant</span>
      </div>
      <div id="dominPoluant" class="mdl-card__title mdl-card--expand bkgrdDomPolu">
      </div>
    </div>

    <div class="demo-card-image mdl-card mdl-shadow--2dp">
      <div class="mdl-card__actions">
        <span class="demo-card-image__filename">Les causes</span>
      </div>
      <div id="causes" class="mdl-card__title mdl-card--expand bkgrdCauses"></div>
    </div>

    <div class="demo-card-image mdl-card mdl-shadow--2dp">
      <div class="mdl-card__actions">
        <span class="demo-card-image__filename">Infos enfants</span>
      </div>
      <div id="infoEnfants" class="mdl-card__title mdl-card--expand bkgrdInfos"></div>
    </div>
`;

}