document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a.abstract').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const container = trigger.closest('.row') || trigger.parentElement?.parentElement;
      if (!container) return;
      container.querySelectorAll('.abstract.hidden').forEach(function (el) {
        el.classList.toggle('open');
      });
      container.querySelectorAll('.bibtex.hidden.open').forEach(function (el) {
        el.classList.remove('open');
      });
    });
  });

  document.querySelectorAll('a.bibtex').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const container = trigger.closest('.row') || trigger.parentElement?.parentElement;
      if (!container) return;
      container.querySelectorAll('.bibtex.hidden').forEach(function (el) {
        el.classList.toggle('open');
      });
      container.querySelectorAll('.abstract.hidden.open').forEach(function (el) {
        el.classList.remove('open');
      });
    });
  });

  document.querySelectorAll('a.waves-effect, a.waves-light').forEach(function (link) {
    link.classList.remove('waves-effect', 'waves-light');
  });

  document.querySelectorAll('.more-authors').forEach(function (element) {
    element.addEventListener('click', function () {
      const hiddenText = element.dataset.hiddenText || '';
      const fullText = element.dataset.fullText || '';
      const nextText = element.textContent.trim() === hiddenText ? fullText : hiddenText;
      element.setAttribute('title', '');
      let cursor = 0;
      element.textContent = '';
      const interval = window.setInterval(function () {
        element.textContent = nextText.slice(0, cursor + 1);
        cursor += 1;
        if (cursor >= nextText.length) {
          window.clearInterval(interval);
        }
      }, Number(element.dataset.animationDelay || 25));
    });
  });
});
