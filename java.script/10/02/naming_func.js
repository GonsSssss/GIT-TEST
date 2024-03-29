const gugudan = function gugudan() {
  for (let i = 1; i <= 9; i++) {
    console.log(`3 * ${i} = ${3 * i}`);
  }
};
gugudan(); // 함수 호출

//
//
//
// 함수를 만드는 방식은 크게
// 함수선언문
// 함수표현식
// 화살표 함수 (ES6 부터) 가 있다

// 함수를 특정 변수안에 집어넣고 변수 이름으로 호출할 수 있는데 그 방식을 함수 표현식이라고 한다.

//
//    함수선언문 정의 방법
//    function 함수이름(인풋값){
//      나 하고싶은 코드블럭
//     }+-++----------
// function gugudan() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`3 * ${i} = ${3 * i}`);
//   }
// }

// gugudan(); // 함수 호출

// 함수를 특정 변수안에 집어넣고 변수 이름으로 호출할 수 있는데
// 그 방식을 함수표현식이라 한다
// const gugugugudan = function gugudan() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`3 * ${i} = ${3 * i}`);
//   }
// };

// //
// gugugugudan(); // 함수 호출(ES6)

// 화살표 함수 정의 법
// () => {};
// const kukudan = () => {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`3 * ${i} = ${3 * i}`);
//   }
// };
// kukudan(); // 함수 호출
