const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.querySelectorAll('.add-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const paypalLink = button.dataset.paypal;

    if (!paypalLink || paypalLink.includes('YOUR-')) {
      alert('Replace this placeholder with your real PayPal payment link first.');
      return;
    }

    window.location.href = paypalLink;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
