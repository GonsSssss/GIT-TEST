(function () {
  const blinkText = document.querySelector(".big-title span");
  const blinkWords = [
    "Publisher",
    "Front-end Developer",
    "Back-end Developer",
    "UI/UX Designer",
  ];

  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  const blinkEffect = () => {
    const currentWord = blinkWords[wordIdx];
    const currentChar = currentWord.substring(0, charIdx);

    blinkText.textContent = currentChar;

    if (!isDeleting && charIdx < currentWord.length) {
      charIdx++;
      setTimeout(blinkEffect, 200);
    } else if (isDeleting && charIdx > 0) {
      charIdx--;
      setTimeout(blinkEffect, 100);
    } else {
      isDeleting = !isDeleting;
      wordIdx = !isDeleting ? (wordIdx + 1) % blinkWords.length : wordIdx;
      setTimeout(blinkEffect, 200);
    }
  };

  blinkEffect();

  //   scrollAnimation
  const titleHeight = window.innerHeight;
  const header = document.querySelector(`header`);

  let prevScrollPosition = 0;
  window.addEventListener(`scroll`, () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= prevScrollPosition + titleHeight) {
      header.classList.add(`active`);
      //   prevScrollPosition += titleHeight;
    } else {
      header.classList.remove(`active`);
      //   prevScrollPosition -= titleHeight;
    }
  });
})();
