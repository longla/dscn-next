
function toggleReadingPanel(panelElement) {
    if (panelElement.hasClass('show')) {
        panelElement.removeClass('show');
    }
    else {
        panelElement.addClass('show');
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