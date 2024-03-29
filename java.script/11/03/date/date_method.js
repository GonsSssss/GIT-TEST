//  날짜 객체에서 연부터 분 초 까지 백틱과 $사인을 활용해서 개별 날짜 데이터를
//  불러와서 날짜 데이터 편집이 가능하다.

const date = new Date(2022, 11, 25, 18, 30, 50); // 2022년 12월 25일 18시 30분 50초
// ${date.getFullYear()}
// ${$date.getMonth()+1}
// ${date.getDate()}
const dateFormat = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(dateFormat); // 2021-11-13 18:30:50
