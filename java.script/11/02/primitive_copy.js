// const 선언방식 변수의 재선언 재할당이 안되는데
// 배열의 일부 데이터를 수정할 수 있었습니다.
// 왜 그럴까요?
// 배열은 객체의 일종입니다.
// 객체자료형의 특징은 참조자료인데, 참조의 의미의 값 자체를 저장하는것이 아닌 값에대한 메모리 주소를 가지고 있는것이 특징이다.
// 일반숫자, 문자데이터 = 일반자료형(데이터 자체를 저장)
// 배열 객체데이터 = 참조 자료형 (데이터가 들어있는 메모리 주소를 저장)
// 그래서 const는 데이터 자체는 못바꾸게 하지만
// 데이터의 주소를 바꾸는 배열은 어쩔수가 없다.
// 그래서 const가 참조자료형인 개체와 배열의 데이터 수정을 허용한다.

//
//
//일반 자료형의 데이터 관리 = 깊은 복사 (값 자체를 가져오는 경우)
let num = 10;
let copyNum = num;
num = 20; // 변수 num을 재할당
console.log(num); // 20
console.log(copyNum); // 10
