// ====== NAVBAR TOGGLE ======
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ====== CONTACT FORM ======
const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Collect form data
  const name = form.querySelector('input[type=text]').value;
  const email = form.querySelector('input[type=email]').value;
  const message = form.querySelector('textarea').value;

  // WhatsApp number (without +)
  const phone = '917016037622';

  // Final message
  const text = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );

  // Open WhatsApp chat
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');

  // Reset form after sending
  form.reset();
});
