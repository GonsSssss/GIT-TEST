var a = 10;
{
  var b = 20;
  console.log(`코드 블록 내부 a: ${a}`);
  console.log(`코드 블록 내부 b: ${b}`);
}
console.log(`코드 블록 외부 a: ${a}`);
console.log(`코드 블록 외부 b: ${b}`);

// 함수 안에서만 지역범위, 전체범위를 따졌습니다. (변수선언이 var만 있던 시기에)
//
// 예전 자바스크립트에서 함수를 기준으로 변수의 범위를
// 구분하는것을 함수레벨 스코프라고 한다.
// 원래 자바스크립트는 함수 스코프를 가지고 있습니다

// 스코프 = var & let, const
//  var은 함수 중괄호 안에서만 범위인식
//  let, const는 중괄호면 거의 어디든 인식

var r = 1;
if (true) {
  var r = 1111;
}
console.log(r);

//
//
// 함수레벨 스코프를 가지는 var와 블록레벨 스코프를 가지는 let, const
if (true) {
  var y = 20; // 블록 내에서 선언된 변수
  let z = 30; // 블록 스코프를 가지는 변수 (ES6 이후)
  const w = 40; // 블록 스코프를 가지는 상수 (ES6 이후)

  console.log(y); // 20 출력
  console.log(z); // 30 출력
}

console.log(y); // 20 출력 (var는 함수 스코프를 따르지만, 블록 내에서도 접근 가능)
// console.log(z); // 에러: z는 블록 외부에서 접근 불가 (let으로 선언된 변수는 블록 스코프를 가짐)
// console.log(w); // 에러: w는 블록 외부에서 접근 불가 (const로 선언된 상수는 블록 스코프를 가짐)
