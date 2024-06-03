function generateRandomMultiple() {
    let randomNumber = Math.floor(Math.random() * 100000); 
    let multiple = 2 * randomNumber;
    document.getElementById('randomMultiple').textContent = "Random Multiple of 2: " + multiple;
}

function comingSoon(elementId, originalText) {
    let element = document.getElementById(elementId);
    element.textContent = "Coming Soon!";
    setTimeout(function() {
        element.textContent = originalText;
    }, 3000);
}