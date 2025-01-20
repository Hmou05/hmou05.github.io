

// Gestion du formulaire de réservation
document.getElementById("train-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const depart = document.getElementById("depart").value;
    const arrivee = document.getElementById("arrivee").value;
    const date = document.getElementById("date").value;
    const result = Trajet de ${ depart } à ${ arrivee } réservé pour le ${ date }.;
    document.getElementById("result").innerText = result;
});


// Gestion du formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Votre message a été envoyé avec succès !");
});

