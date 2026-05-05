// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeControl = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const hornAudio = document.querySelector('#expose audio');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = horn.replace('-', ' ');
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });

  volumeControl.addEventListener('input', () => {
    const volumeValue = Number(volumeControl.value);
    hornAudio.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  hornAudio.volume = Number(volumeControl.value) / 100;
}
