//  person 객체에 데이터를 추가하는 과정이다.
//  객체에 key 이름을 선언해주고 value값을 넣으주면 된다.
//  이렇게 만들어진 객체에 나중에 속성을 추가한다고 말하고
//  이에 대해 속성을 동적으로 추가한다고 한다.
//
//
//
//
const person = {};
person.name = {
  firstName: "GilDong",
  lastName: "Hong",
};
person.likes = ["apple", "samsung"];
person.printHello = function () {
  return "hello";
};
console.log(person);

//
//
// 객체속성의 동적 삭제
//
// const person = {
//   firstName: "GilDong",
// };
// delete person.firstName;
// console.log(person);
