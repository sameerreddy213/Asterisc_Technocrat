function registerWebinar(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;


    window.location.href = 'thank-you.html';
}
