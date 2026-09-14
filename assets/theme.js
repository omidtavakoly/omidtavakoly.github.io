(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function isDark() {
    var current = root.getAttribute('data-theme');
    if (current) return current === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (btn) {
    var paint = function () {
      btn.textContent = isDark() ? '☀' : '☾';
      btn.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
    };
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
    paint();
  }

  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
