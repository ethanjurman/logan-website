module.exports = {
  init: () => ({album: null, status: 'NOT_LOADED'}),
  fetchAlbum: (state, id, actions) => {
    fetch(`http://localhost:3000/album/${id}`)
      .then(data => data.json())
      .then((data) => {
        actions.setAlbum({data, id})
      })
    return Object.assign({}, state, {status: 'LOADING', id: id})
  },
  setAlbum: (state, {data, id}) => Object.assign({}, state, {album: data, id: id, status: 'LOADED'})
}
