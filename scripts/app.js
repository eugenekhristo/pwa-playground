if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

let deferredPromt;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPromt = e;
});

const $addPromptBtn = document.getElementById('addPropmtBtn');

$addPromptBtn.addEventListener('click', e => {
  if (deferredPromt) {
    deferredPromt.prompt();

    deferredPromt.userChoice.then(choiceResult => {
      console.log('choiceResult - ', choiceResult);
      console.log('choiceResult.outcome - ', choiceResult.outcome);
      deferredPrompt = null;
    });
  }
});
