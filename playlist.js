
const PlaylistModule = function(dialog) {
    return {
        create: function(playlistName) {
            let li = document.createElement('li')
            li.textContent = playlistName
            document.querySelector('ul').appendChild(li);
            dialog.close();
        }
    }
}
