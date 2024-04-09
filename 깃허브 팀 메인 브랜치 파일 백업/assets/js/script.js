(function () {
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


  const imagesEl = document.getElementById("images");

  // const imagesArr = [
  //   "assets/images/kv_image_1.png",
  //   "assets/images/kv_image_2.png",
  //   "assets/images/kv_image_3.png",
  //   "assets/images/kv_image_4.png",
  //   "assets/images/kv_image_5.png",
  // ];
  let imgArr = 5;
  let indexImg = 1;
  function writeImg() {
    // imagesEl.src = imagesArr[indexImg];
    imagesEl.src = `assets/images/kv_image_${indexImg}.png`;
    indexImg = (indexImg % imgArr) + 1;
    setTimeout(deleteImg, 4200);
  }
  function deleteImg() {
    // imgEl.src = "";
    // imagesEl.src = "";

    // imagesEl.style.opacity = 0;
    setTimeout(writeImg);
  }
  writeImg();
})();

// let teamArray = [{
//     name: `황운하`,
//     skill: `HTML`
// }, {
//     name: `김주영`,
//     skill: `javascript`,
// }];

(function () {
    window.addEventListener(`scroll`, () => {
        let scrollY = window.scrollY;
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
            if (!document.querySelector(`.avility`).classList.contains(`active`)) {
                barContents[i].style.transitionDelay = `${0.3 * (i + 1)}s`;
                barSpanContents[i].style.transitionDelay = `${0.3* (i + 1)}s`;
            } else {
                barContents[i].style.transitionDelay = `0s`;
                barSpanContents[i].style.transitionDelay = `0s`;
            }
        }
    });

})();