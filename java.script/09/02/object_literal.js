//
//
// 중괄호 안에 key와 value 값으로 구성된 자료구조를 객체 리터럴이라고 한다.
// 객체 리터럴에서 데이터 접근은 객체.key값 입니다.

let studentScore = {
  koreanScore: 80,
  englishScore: 70,
  mathScore: 90,
  scienceScore: 60,
};
console.log(studentScore.koreanScore); // 80
console.log(studentScore["englishScore"]); // 70
