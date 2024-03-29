let empty = null;
console.log(empty); // null

// undefined : 변수나 상수를 메모리 공간에 선언하면 반드시 생성한 공간에 데이터를 할당해야한다.

// 할당하지 않는 경우 자바스크립트에서 입시로 변수나 상수 공간에 데이터를 집어넣는데 이 때 할당값이 undefined이다.
// 자바스크립트의 undefined는 사용자가 임의로 정의해서 할당하느 자료형이 아니다.
//
//
// null : 변수나 상수를 선언한 후, 의도적으로 선언한 공간을 비워둘 때 사용한다.

//  예시) 매일 새벽 5시, 블룸버그 에서 미국장 마감데이터가 제대로 들어오고 조건이 만족되면 미국장 데이터로
//       주식 매매전략을 짜는 프로그램이 있다고  가정
//       이때, 개발자 코딩 혹은 데이터에 에러가 있어서 데이터가 없으면 undefined 처리되어 코드가 작동하지 않게 처리하고
//       null 값 후 새벽 5시에 null값의 데이터가 채워지면 주식프로그램 코드가 작동하는 경우를 상상해보자.
