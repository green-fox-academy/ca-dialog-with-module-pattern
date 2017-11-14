const AddPlaylistDialog = function(dialogTitle) {
    let actionCallback;
    let closeCallback = () => {};
    const dialogRootElement = document.querySelector('.dialog')
    const title = dialogRootElement.querySelector('h1');
    const button = dialogRootElement.querySelector('button');
    const input = dialogRootElement.querySelector('input');
    const closeBtn = dialogRootElement.querySelector('div');
    title.textContent = dialogTitle;

    button.addEventListener('click', (e) => {
        actionCallback(input.value);
    });
    closeBtn.addEventListener('click', (e) => {
        closeCallback();
        close();
    });

    function close() {
        dialogRootElement.style.display = 'none';
    }

    function show() {
        dialogRootElement.style.display = 'block';
    }

    return {
        close: close,
        show: show,
        onAction: function(callback) {
            actionCallback = callback;
        },
        onClose: function(callback) {
            closeCallback = callback;
        }
    }
}
