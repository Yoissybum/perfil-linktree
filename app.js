let cards = document.querySelectorAll('.card-pequeñas, .grande-1, .grande-2');

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        let link = this.getAttribute('data-link');
        console.log("Redirigiendo a: " + link);
        window.open(link, '_blank');
    });
});