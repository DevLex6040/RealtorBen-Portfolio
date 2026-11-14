(() => {
  const TO = 'inawolebenedicta919@gmail.com';
  const WA = '2349135081211';
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const get = (id) => document.getElementById(id).value.trim();
  const compose = () => {
    const name = get('nameInput'), email = get('emailInput'), message = get('textBoxs');
    return { name, subject: 'Real Estate Inquiry from ' + name,
      body: 'Hello Benedicta,\n\n' + message + '\n\nName: ' + name + '\nEmail: ' + email };
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const m = compose();
    window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body);
    setTimeout(() => { window.location.href = 'submit.html'; }, 1500);
  });
  document.getElementById('waBtn').addEventListener('click', () => {
    if (!form.reportValidity()) return;
    const m = compose();
    const text = 'Hello Benedicta, my name is ' + m.name + '.\n\n' + get('textBoxs') + '\n\nMy email: ' + get('emailInput');
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
