
        
       

// Get the card elements and pagination buttons
const cards = document.querySelectorAll('.cards .card');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Set the number of cards to display per page
const cardsPerPage = 6;

// Initialize the current page index
let currentPageIndex = 0;

// Calculate the total number of pages
const totalPages = Math.ceil(cards.length / cardsPerPage);

// Function to update the visibility of cards based on the current page index
function updateCardVisibility() {
// Calculate the range of cards to display based on the current page index
const startIndex = currentPageIndex * cardsPerPage;
const endIndex = (currentPageIndex + 1) * cardsPerPage;

// Hide all cards
cards.forEach(card => {
card.style.display = 'none';
});

// Show the cards within the range
for (let i = startIndex; i < endIndex && i < cards.length; i++) {
cards[i].style.display = 'block';
}

// Disable/enable previous and next buttons based on the current page index
previousBtn.disabled = (currentPageIndex === 0);
nextBtn.disabled = (currentPageIndex === totalPages - 1);
}

// Event listener for previous button click
previousBtn.addEventListener('click', () => {
if (currentPageIndex > 0) {
currentPageIndex--;
updateCardVisibility();
}
});

// Event listener for next button click
nextBtn.addEventListener('click', () => {
if (currentPageIndex < totalPages - 1) {
currentPageIndex++;
updateCardVisibility();
}
});

// Initially display the first page of cards
updateCardVisibility();

