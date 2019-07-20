
function toggleReadingPanel(panelElement) {
    if (panelElement.classList.contains('show')) {
        panelElement.classList.remove('show');
    }
    else {
        panelElement.classList.add('show');
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
