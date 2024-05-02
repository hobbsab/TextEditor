const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
 window.deferredPrompt = event;
 butInstall.classList.toggle('hidden', false);
});

window.addEventListener('appinstalled', (event) => {
 window.deferredPrompt = null;
});