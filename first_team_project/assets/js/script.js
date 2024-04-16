(function () {
  // kv
  const spanEl = document.querySelector("main h1 span");
  const txtArr = ["황운하", "김용환", "이선우", "김희곤", "김주영"];
  let indexTxt = 0;
  let currentTxt = txtArr[indexTxt].split("");
  function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, 1000);
    } else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 2000);
    }
    function deleteTxt() {
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if (currentTxt.length !== 0) {
        setTimeout(deleteTxt, 100);
      } else {
        indexTxt = (indexTxt + 1) % txtArr.length;
        currentTxt = txtArr[indexTxt].split("");
        writeTxt();
      }
    }
  }
  writeTxt();

  let kvSwiper = new Swiper(`.kv-img-content .swiper`, {
    loop: true,
    autoplay: {
      delay: 3000
    },
    effect: `fade`,
    touchRatio: 0,
  });
  // -----kv

  // team
  let otSwiperSwiper = new Swiper(`.ourteam-imgbox .swiper`, {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: `fade`,
    touchRatio: 0,
  });
  // -----team


  // ability
  window.addEventListener(`scroll`, () => {
    let scrollY = window.scrollY;
    // header fixed javascript
    let header = document.querySelector(`header`);
    let headerOffset = header.getBoundingClientRect().bottom;
    if(scrollY >= headerOffset) {
      header.classList.add(`fixed`);
    } else {
      header.classList.remove(`fixed`);
    }
    const sections = document.querySelectorAll(`section`);
    sections.forEach((section) => {
        const sectionOffset = section.getBoundingClientRect().top + (scrollY / 1.5);
        if (scrollY >= sectionOffset) {
            section.classList.add(`active`);
        } else {
            section.classList.remove(`active`);
        }
    });

    const barContents = document.querySelectorAll(`.bar`);
    const barSpanContents = document.querySelectorAll(`.graph span`);
    for (let i = 0; i < barContents.length; i++) {
        let barData = barContents[i].getAttribute(`data-pers`);
        barContents[i].style.width = `${barData}%`;
        barContents[i].style.backgroundColor = `rgba(41, 207, 176, 0.${barData})`;
        if (!document.querySelector(`.section-ability`).classList.contains(`active`)) {
            barContents[i].style.transitionDelay = `${0.3 * (i + 1)}s`;
            barSpanContents[i].style.transitionDelay = `${0.3* (i + 1)}s`;
        } else {
            barContents[i].style.transitionDelay = `0s`;
            barSpanContents[i].style.transitionDelay = `0s`;
        }
      }
  });
  // ----ability
})();