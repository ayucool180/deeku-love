// JavaScript for animated hearts and sparkling effects

// Function to create animated hearts
function createHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-container';
    
    // Create hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = Math.random() * 2 + 1 + 's';
        
        heartsContainer.appendChild(heart);
    }

    document.body.appendChild(heartsContainer);
}

// Function to create sparkling effects
function createSparkles() {
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';
    
    // Create sparkles
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
        
        sparklesContainer.appendChild(sparkle);
    }

    document.body.appendChild(sparklesContainer);
}

// Call functions to create animated hearts and sparkles when the page loads
window.onload = function() {
    createHearts();
    createSparkles();
};
