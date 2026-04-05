/* ========================================
   Design System Site — Interactions
   ======================================== */

(function () {
  'use strict';

  // ===== 导航高亮 =====
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ===== 复制按钮 =====
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-copy');
      var codeEl = document.getElementById(targetId);
      if (!codeEl) return;

      var text = codeEl.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = '已复制';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = '复制';
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });

  // ===== 平滑滚动 =====
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
