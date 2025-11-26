// Scripts: menú responsive, tema y formulario simple
document.addEventListener('DOMContentLoaded', () => {
  // Año en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle navegación (móvil)
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle?.addEventListener('click', () => {
    if (!nav) return;
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = isOpen ? '' : 'column';
  });

  // Tema: alternar y persistir
  const themeToggle = document.getElementById('themeToggle');
  const current = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(current);

  themeToggle?.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function setTheme(t) {
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }

  // Descarga de currículum (ejemplo: puedes enlazar a un PDF en tu servidor)
  const downloadResume = document.getElementById('downloadResume');
  downloadResume?.addEventListener('click', (e) => {
    e.preventDefault();
    // Si tienes un PDF en la carpeta, cambia el href a './resume.pdf' o a tu URL de drive
    const resumeUrl = 'https://example.com/tu-cv.pdf';
    window.open(resumeUrl, '_blank');
  });

  // Formulario: validación simple y envío vía mailto (fallback)
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('name') || {}).value || '';
    const email = (document.getElementById('email') || {}).value || '';
    const message = (document.getElementById('message') || {}).value || '';

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Aquí podrías integrar una API (Formspree, Netlify Forms, o tu backend).
    // Fallback: abrir cliente de correo
    const subject = encodeURIComponent(`Contacto desde portafolio: ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:tuemail@ejemplo.com?subject=${subject}&body=${body}`;
  });
});