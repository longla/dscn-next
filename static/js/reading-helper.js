
function toggleReadingPanel(panelElement) {
    const hideClassName = "hide";
    if (panelElement.classList.contains(hideClassName)) {
        panelElement.classList.remove(hideClassName);
    }
    else {
        panelElement.classList.add(hideClassName);
    }
}

function readingBtnClickHandle() {
    // handle click event
    const btn = document.getElementById('reading-helper-action');
    const readingPanel = document.querySelector('.reading-action-menu');
    btn.addEventListener('click', () => {
        toggleReadingPanel(readingPanel);
    });
}

function init() {
    document.addEventListener('DOMContentLoaded', () => {
        readingBtnClickHandle();
    })
}

init();
