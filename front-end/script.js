function setupModal(modal) {
  function toggle(forceOpen) {
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !modal.classList.contains('is-open');
    modal.classList.toggle('is-open', shouldOpen);
    modal.setAttribute('aria-hidden', String(!shouldOpen));
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  modal.querySelectorAll('[data-close-modal]').forEach((closeEl) => {
    closeEl.addEventListener('click', () => toggle(false));
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      toggle(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      toggle(false);
    }
  });

  return toggle;
}

document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
  const modal = document.getElementById(trigger.dataset.openModal);
  if (!modal) return;
  const toggle = setupModal(modal);
  trigger.addEventListener('click', () => toggle(true));
});
