const Tram = require('tram-one')
const html = Tram.html({
  Blurb: require('../elements/Blurb')
})

module.exports = ({state, actions}) => {
  const show = state.showModal ? 'show' : '';
  const display = state.showModal ? 'block' : 'none';
  console.log(state, actions)
  return html`
  <div id="exampleModalLive" class="modal fade ${show}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style="display: ${display}; padding-right: 17px;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLiveLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick=${actions.hideModal}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <Blurb />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Email me</button>
      </div>
    </div>
  </div>
</div>
  `
}
