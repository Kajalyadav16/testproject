(function () {
  var mb = document.querySelector('.menu'), sn = document.getElementById('site-nav');
  function closeMenu() { sn.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }
  mb.addEventListener('click', function () {
    var open = sn.classList.toggle('open');
    mb.setAttribute('aria-expanded', open);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sn.classList.contains('open')) { closeMenu(); mb.focus(); }
  });
  /* Newsletter form: front-end demo only. Connect Mailchimp, Brevo or similar to collect emails. */
  document.addEventListener('submit', function (e) {
    var f = e.target.closest('.nl form');
    if (!f) return;
    e.preventDefault();
    var i = f.email, m = f.parentNode.querySelector('.msg');
    if (!/^\S+@\S+\.\S+$/.test(i.value)) {
      i.setAttribute('aria-invalid', 'true');
      m.textContent = 'Please enter a valid email address, like name@example.com.';
      i.focus();
      return;
    }
    i.removeAttribute('aria-invalid');
    m.textContent = 'Thanks for trying the form. This is a design demo, so your email was not saved or sent.';
    i.value = '';
  });
})();
