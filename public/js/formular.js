const form = document.getElementById('contact-form');
const name = form.querySelector('#name');
const email = form.querySelector('#email');
const message = form.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendEmail(name.value, email.value, message.value);
});

function sendEmail(name, email, message) {
  Email.send({
    SecureToken: 'your_secure_token',
    To: 'recipient_email@example.com',
    From: 'sender_email@example.com',
    Subject: `New message from ${name}`,
    Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
  }).then(
    message => alert('Message sent successfully!')
  );
}
