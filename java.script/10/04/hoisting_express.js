printHello();
var printHello = function printHello() {
  console.log("Hello");
};

// 함수의 호이스팅 현상은 함수 선언문 (옛날방식)
// 에서 발생하지만 함수 표현식과 화살표 함수에서는
// 함수의 호이스팅 현상이 발생하지 않습니다.(모던자바스크립트)

// ppp();
// let ppp = () => {
//   console.log("Hello");
// };
