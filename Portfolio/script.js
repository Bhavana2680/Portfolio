document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate form fields
function validateForm(name, email, message) {
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to send email using EmailJS (optional)
function sendEmail(name, email, message) {
    // EmailJS service ID and template ID (replace with your actual IDs)
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    
    // Template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then((response) => {
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        }, (error) => {
            alert('Failed to send message. Please try again later.');
            console.error('Failed to send message:', error);
        });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, message)) {
        // Optionally send email using EmailJS
        // Uncomment the line below after configuring EmailJS
        // sendEmail(name, email, message);

        // Simple alert message if not using EmailJS
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        this.reset();
    }
});

