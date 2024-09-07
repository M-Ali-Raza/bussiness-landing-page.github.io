document.querySelector('.contact-form').addEventListener('submit', function(event) {
    // Simple form validation logic here
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        event.preventDefault();
        alert("Please fill all fields correctly.");
    }
});
