document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const budget = document.getElementById('budget').value;

    // Simulated results
    const results = `
        <h2>Available Options</h2>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Budget:</strong> $${budget}</p>
        <ul>
            <li>Flight: $300 - Airline ABC</li>
            <li>Hotel: $100 per night - Hotel XYZ</li>
        </ul>
    `;

    document.getElementById('results').innerHTML = results;
});

// Background image rotation
const backgrounds = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentBackgroundIndex = 0;

function changeBackground() {
    const backgroundElement = document.querySelector('.background');
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    backgroundElement.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
}

setInterval(changeBackground, 5000); // Change background every 5 seconds

// Initial background setup
document.querySelector('.background').style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
