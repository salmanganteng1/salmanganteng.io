const balloonContainer = document.querySelector('.balloon-container');

function createBalloon() {
    const balloonDiv = document.createElement('div');
    balloonDiv.classList.add('balloon');
    
    balloonDiv.innerHTML = `
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g class="string">
                <rect x="31" y="40" width="2" height="24" fill="#B0C4DE"/>
            </g>
            <g class="balloon-shape">
                <ellipse cx="32" cy="24" rx="20" ry="28" fill="#FF69B4"/>
            </g>
        </svg>
    `;

    // Menentukan posisi balon secara acak
    balloonDiv.style.left = `${Math.random() * 100}vw`;
    balloonDiv.style.animationDelay = `${Math.random() * 5}s`; // Variasi waktu mulai animasi

    return balloonDiv;
}

function populateBalloons(numBalloons) {
    for (let i = 0; i < numBalloons; i++) {
        const balloon = createBalloon();
        balloonContainer.appendChild(balloon);
    }
}

// Membuat 20 balon yang terbang
populateBalloons(20);
