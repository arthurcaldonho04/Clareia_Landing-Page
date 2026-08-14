const bioModal = document.getElementById('bioModal');
const openBioBtn = document.getElementById('openBioBtn');
const closeBioBtn = document.getElementById('closeBioBtn');

function toggleBioModal(forceOpen) {
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !bioModal.classList.contains('is-open');
  bioModal.classList.toggle('is-open', shouldOpen);
  bioModal.setAttribute('aria-hidden', String(!shouldOpen));
  document.body.style.overflow = shouldOpen ? 'hidden' : '';
}

openBioBtn.addEventListener('click', () => toggleBioModal(true));
closeBioBtn.addEventListener('click', () => toggleBioModal(false));

bioModal.addEventListener('click', (event) => {
  if (event.target === bioModal) {
    toggleBioModal(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bioModal.classList.contains('is-open')) {
    toggleBioModal(false);
  }
});
