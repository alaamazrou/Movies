function searchMovie() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const movieTitle = card.querySelector('h3').textContent.toLowerCase();
        if (movieTitle.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// إرسال الرسالة
function sendMessage() {
    const message = document.querySelector('textarea').value;
    if (message.trim() === "") {
        alert("Please write a message before sending.");
    } else {
        alert("Your message has been sent!");
        // هنا يمكنك إضافة منطق إرسال الرسالة  
    }
}