window.addEventListener('message', function(event) {
    const data = event.data;

    const container = document.getElementById('drawtext');
    const content = document.getElementById('drawtext-content');
    const leftBox = document.getElementById('left-box');

    if (data.action === 'show') {
        // Reproducir sonido
        const audio = new Audio('sounds/popup.mp3');
        audio.play().catch(err => console.error("Error al reproducir el sonido:", err));

        const match = data.text.match(/^\[(\w)\]\s*(.*)$/);
        if (match) {
            const key = match[1];
            const text = match[2];

            leftBox.innerText = key;
            content.innerText = text;
        } else {
            leftBox.innerText = '';
            content.innerText = data.text;
        }

        container.style.display = 'flex';
        void container.offsetWidth;
        container.classList.add('active');
    }

    if (data.action === 'hide') {
        container.classList.remove('active');
        setTimeout(() => {
            container.style.display = 'none';
        }, 300);
    }
});


document.addEventListener('keydown', function(event) {
    const leftBox = document.getElementById('left-box');
    const displayedKey = leftBox.innerText.toUpperCase();

    if (event.key.toUpperCase() === displayedKey) {
        leftBox.classList.remove('pressed');
        void leftBox.offsetWidth;
        leftBox.classList.add('pressed');
    }
});
