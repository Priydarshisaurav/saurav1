// JavaScript for the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Grab form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    } else {
        alert('Please fill in all fields!');
    }
});
