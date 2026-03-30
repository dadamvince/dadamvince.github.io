document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('d-footnote').forEach(function (footnote) {
    const supSpan = footnote.shadowRoot?.querySelector('sup > span');
    const hoverStyle = footnote.shadowRoot?.querySelector('d-hover-box')?.shadowRoot?.querySelector('style')?.sheet;
    if (supSpan) {
      supSpan.setAttribute('style', 'color: var(--global-theme-color);');
    }
    if (hoverStyle) {
      hoverStyle.insertRule('.panel {background-color: var(--global-bg-color) !important;}');
      hoverStyle.insertRule('.panel {border-color: var(--global-divider-color) !important;}');
    }
  });

  document.querySelectorAll('d-cite').forEach(function (cite) {
    const citeSpan = cite.shadowRoot?.querySelector('div > span');
    const citeStyle = cite.shadowRoot?.querySelector('style')?.sheet;
    const hoverStyle = cite.shadowRoot?.querySelector('d-hover-box')?.shadowRoot?.querySelector('style')?.sheet;
    if (citeSpan) {
      citeSpan.setAttribute('style', 'color: var(--global-theme-color);');
    }
    if (citeStyle) {
      citeStyle.insertRule('ul li a {color: var(--global-text-color) !important; text-decoration: none;}');
      citeStyle.insertRule('ul li a:hover {color: var(--global-theme-color) !important;}');
    }
    if (hoverStyle) {
      hoverStyle.insertRule('.panel {background-color: var(--global-bg-color) !important;}');
      hoverStyle.insertRule('.panel {border-color: var(--global-divider-color) !important;}');
    }
  });
});
