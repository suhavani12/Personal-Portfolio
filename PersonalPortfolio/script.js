const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    projectItems.forEach((item) => {
      const category = item.dataset.category;

      if (filter === 'all' || filter === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');

  let valid = true;

  if (name.value.trim() === '') {
    valid = false;
    document.getElementById('nameError').textContent = 'Please enter your name.';
    name.classList.add('is-invalid');
  } else {
    document.getElementById('nameError').textContent = '';
    name.classList.remove('is-invalid');
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    valid = false;
    document.getElementById('emailError').textContent = 'Please enter your email.';
    email.classList.add('is-invalid');
  } else if (!emailPattern.test(email.value.trim())) {
    valid = false;
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    email.classList.add('is-invalid');
  } else {
    document.getElementById('emailError').textContent = '';
    email.classList.remove('is-invalid');
  }

  if (message.value.trim() === '') {
    valid = false;
    document.getElementById('messageError').textContent = 'Please enter your message.';
    message.classList.add('is-invalid');
  } else {
    document.getElementById('messageError').textContent = '';
    message.classList.remove('is-invalid');
  }

  if (valid) {
    formMessage.textContent = 'Message submitted successfully!';
    formMessage.className = 'success';
    contactForm.reset();
  } else {
    formMessage.textContent = 'Please fix the errors and try again.';
    formMessage.className = 'error';
  }
});
