// 객체는 key와 value로 구성된 속성의 집합을 의미합니다.
// 객체는 복합적인 의미가 있는데 속성과 동작으로 구성된 단위라고도 하고
// 파이썬에서는 클래스라는 설계도로 찍어낸 제품에 비유했습니다.
//
// 자바스크립트에서 객체는 key와 value로 구성된 데이터집합, 함수, 배열데이터가 있고
// 제품이라는 비유에 걸맞게 함수가 특정 변수로 들어가서 객체화 되면(메서드)
// 해당 변수는 함수의 모든 기능과 속성을 가지게 됩니다.(설계도로 찍어낸 제품처럼)
//
// 객체는 존재단위라는 추상적인 의미도 있으니 예제를 통해 익히자
//
// 객체는 중괄호{}를 이용해서 생성할 수 있다.
// 이런 방법을 리터럴 방식으로 객체를 생성했다고 표현한다.
// 바로 아래처럼 아무런 내용이 없는 객체를 빈 객체라고 한다.
//    ->   const xxx = {};
//
// 이런식으로 중괄호 안에 무언가 들어있다면 처음부터 속성을 지정한 상태로
// 생성되었다고 말한다.
//    ->   const xxxx = {data:"name"}
//
//
//
// 객체는 데이터의 종류를 가리지 않습니다. 모든 자료형의 데이터를 가질 수 있다.
// 객체에는 숫자, 논리, 배열, 모든 종류의 데이터가 들어간다.
// 데이터 대신 함수를 통째로 넣었다.
// 객체데이터 접근 시 해당 함수를 실행하게 할 수 있다.
// 객체에서 속성값으로 함수를 집어넣으면 그 넣어진 함수는 메서드(method)라고 부른다.
//

const person = {
  name: {
    firstName: "Gildong",
    lastName: "Hong",
  },
  age: 20,
  likes: ["apple", "samsung"],
  printHello: function () {
    return "hello";
  },
};
console.log(person.name.lastName); // Hong
console.log(person.age); // 20
console.log(person.likes[0]); // apple
console.log(person.printHello()); // hello
// console.log(person."name"); // SyntaxError: Unexpected string
