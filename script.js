// ===== Sidebar Toggle =====
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});

// Close sidebar when link clicked
document.querySelectorAll('.sidebar-links a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
});

// ===== Contact Form (WhatsApp) =====
const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.querySelector('input[type=text]').value;
  const email = form.querySelector('input[type=email]').value;
  const message = form.querySelector('textarea').value;

  const phone = '917016037622'; // WhatsApp number without +
  const text = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  form.reset();
});
