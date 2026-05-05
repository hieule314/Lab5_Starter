// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImg = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();

    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoiceName = voiceSelect.value;
    const voices = speechSynthesis.getVoices();

    const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    utterance.addEventListener('error', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });
}
