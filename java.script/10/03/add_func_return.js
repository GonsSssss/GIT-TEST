function sum(num1, num2) {
  let result = num1 + num2;
  return result;
  // return num1 + num2;
}
const result = sum(30, 20);
console.log("out: " + result); // out 30

// 함수 안의 변수는 return 문으로 반환해야 함수 밖에서 접근 가능합니다.
// 함수 내부에 선언된 변수 result를 밖에서 읽을 수 없기때문이다.

sum(10, 20);
console.log("출력 = " + result);
