(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(t=>{window.deferredPrompt=t,e.classList.toggle("hidden",!1)})),window.addEventListener("appinstalled",(e=>{window.deferredPrompt=null}))})();