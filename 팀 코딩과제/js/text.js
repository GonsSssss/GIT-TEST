(function () {
  //span 태그 가져오기
  const spanEl = document.querySelector("main h2 span");
  // 화면에 표시할 문장 데이터 셋업
  const txtArr = [
    "web publisher",
    "front-end developer",
    "ux designer",
    "back-end developer",
  ];
  // 배열의 인덱스 초기값
  let index = 0;
  // 화면에 표시할 문장 배열에서 데이터 가져와서 배열로 만들기
  let currentTxt = txtArr[index].split("");

  // 텍스트 효과의 핵심은 currentTxt 변수에 담긴 글자 배열 요소를
  // 하나씩 화면에 출력하는 것입니다.
  // 그러면 텍스트가 마치 하나씩 작성된 것처럼 보이게 합니다.
  // 이를 위한 writetxt() 함수를 하나씩 만들어 출력 시키시죠

  function writeTxt() {
    // 배열의 요소를 한개씩 출력합니다. 이때 쓰이는 shift()메서드는
    // 배열에서 맨 앞의 글자를 추출하고 추출된 글자를 원본에서 버립니다.
    // 예를 들어 web publisher 단어가 있다면 w보여주고 지우고 e보여주고 지우고 반복
    spanEl.textContent += currentTxt.shift();
    //
    // currentTxt.length !==0 의 뜻은 아직 보여줘야할 글자가 남아있다면
    // writeTxt에 남아있는 글자 데이터 셋에 남은 글자를 반복해서 하나씩 보여준다.
    // 단 글자 보여줄 때 글자 보여주는 속도를 글자마다 랜덤하게 바꿉니다.
    // main h2 span 여기에다가 currentTxt에 저장된 글자를 하나씩 꺼내서 보여주고 지워
    // setTimeout(x, 1000) 뒤의 숫자 1000이 시간 간격이다.(1000밀리세컨드)
    // 뒤의 숫자를 random처리해서 글자마다 다른 속도를 갖도록 처리합니다.
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }
    // 표시할 글자가 더이상 없다면 텍스트를지워야한다.
    // 텍스트를 지우기 위해서 화면에 표시된 문장을 데이터에 집어넣고
    // deleteTxt 라는 함수를 통해 화면의 글자를 삭제한다.
    else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }

  // 텍스트 삭제효과 구현하기
  function deleteTxt() {
    // 가져온 텍스트 데이터를 끝에서부터 하나씩 삭제합니다.
    currentTxt.pop();
    // 글자 삭제 후 한글자씩 짤려있는 문자열을 원상태로 돌립니다.
    // web publishe 이렇게 하나 짤리고 원상태
    spanEl.textContent = currentTxt.join("");
    // 글자 하나 짜르고 나서 아직 글자가 남았다면 모든 글자가 사라질떄 까지 함수 실행
    // 특이점은 아래 함수는 자기자신을 돌린다는 뜻이 되었습니다.
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100)); //재귀함수
    }
    // 글자 다 짜르고 나면 인덱스 숫자를 하나 늘려서 다음 문장을 새로 뽑는다.
    // 다음 문장을 받은 후 writeTxt()를 실행시켜서 화면에 한글자씩 다시 표시합니다.
    // 이런식으로 데이터와 화면에 글자데이터를 주고 받으며 무한반복
    else {
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }

  writeTxt();
})();
