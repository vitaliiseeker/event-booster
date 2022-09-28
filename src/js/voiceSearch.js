// import { onSearch } from './search.js';

const searchForm = document.querySelector('.voise-search');
const searchFormInput = searchForm.querySelector('.search__input'); // <=> document.querySelector("#search-form input");
const info = document.querySelector('.info');

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if (SpeechRecognition) {
  console.log('Your Browser supports speech Recognition');

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'en-US';

  searchForm.insertAdjacentHTML(
    'beforeend',
    '<button type="button" class="voise-microphone"><i class="fas fa-microphone"></i></button>'
  );
  searchFormInput.style.paddingRight = '50px';

  const micBtn = searchForm.querySelector('.voise-microphone');
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener('click', micBtnClick);
  function micBtnClick() {
    if (micIcon.classList.contains('fa-microphone')) {
      // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    } else {
      recognition.stop();
    }
  }

  recognition.addEventListener('start', startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove('fa-microphone');
    micIcon.classList.add('fa-microphone-slash');
    searchFormInput.focus();
    console.log('Voice activated, SPEAK');

    info.style.color = '#dc56c5';
  }

  recognition.addEventListener('end', endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove('fa-microphone-slash');
    micIcon.classList.add('fa-microphone');
    info.classList.remove('info-hover');
    searchFormInput.focus();
    console.log('Speech recognition service disconnected');

    info.style.color = '#939393';
  }

  recognition.addEventListener('result', resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === 'stop') {
      recognition.stop();
    } else if (!searchFormInput.value) {
      searchFormInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === 'search') {
        //   searchForm.submit();
        onSearch(event);
      } else if (transcript.toLowerCase().trim() === 'reset') {
        searchFormInput.value = '';
      } else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  }

  info.textContent = 'Voice Commands: "stop", "reset", "search"';
} else {
  console.log('Your Browser does not support speech Recognition');
  info.textContent = 'Your Browser does not support Speech Recognition';
}

function onSearch(e) {
  e.preventDefault();

  const query = refSearchEvent.value;
  const country = refSelectCountry.value;
  EventsApi.clearParams();
  EventsApi.fetchEvents(0, query, country)
    .then(events => renderEvents(events))
    .catch(() => {
      handleError();
    });
  gallery.style.display = 'grid';
}
