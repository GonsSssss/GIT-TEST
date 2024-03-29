// 자바스크립트의 시간은 1/1000초 단위로 표기된다.(밀리세컨드)

const date1 = new Date("2022-12-23");
const date2 = new Date("2022-12-25");

const dateDiff = date2.getTime() - date1.getTime();
// 아래는 밀리세컨드 시간을 일단위로 환산하려고 시간을 나눔
const interval = dateDiff / (60 * 60 * 24 * 1000);
console.log(`두 날짜의 차이는 ${interval}일입니다.`); // 두 날짜의 차이는 2일 입니다.
