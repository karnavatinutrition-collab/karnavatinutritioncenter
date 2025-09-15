const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// handle contact form
const form = document.querySelector('.contact-form');
form.addEventListener('submit', async e => {
  e.preventDefault();

  const payload = {
    name: form.querySelector('input[type=text]').value,
    email: form.querySelector('input[type=email]').value,
    message: form.querySelector('textarea').value
  };

  // save to JSON on the server
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    alert('Thanks! Your message was saved and will also open WhatsApp.');
    // open WhatsApp chat
    const phone = '917016037622'; // your full number without + sign
    const text = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nMessage: ${payload.message}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    form.reset();
  } else {
    alert('Something went wrong. Please try again later.');
  }
});
