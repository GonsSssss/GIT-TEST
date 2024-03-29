let food = "melon";
switch (food) {
  case "melon":
  case "apple":
  case "banana":
    console.log("fruit");
    break;
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruits and vegetables.");
    break;
}

// if보다 코드가 깔끔한 장점이 있다.

//  switch 의 단점
//  범위로 비교 불가
//  오직 정수, 혹은 문자 데이터만 입력 가능

// 모든 스위치문의 마지막에는 break가 들어간다.
//  break가 없으면 해당 케이스 밑으로 모든 케이스를 실행하면서 break가 있는 case를 만날때까지 멈추지 않는다.
//  맨 마지막 default 케이스만 break 생략한다.
//  break없는 케이스는 밑으로 끝까지 실행되는것을 이용해서 같은 결과 케이스들을 하나의 break로 묶어서 코드 작성 가능

let food2 = "melon";
switch (food2) {
  case "melon":
    console.log("멜론");
    break;
  case "apple":
    console.log("사과");
    break;
  case "banana":
    console.log("바나나");
    break;
  case "carrot":
    console.log("당근");
    break;
  default:
    console.log("이게뭐니????");
    break;
}

if (food2 == "melon") {
  console.log("멜론");
} else if ((food2 = "apple")) {
  console.log("사과");
} else if ((food2 = "banana")) {
  console.log("바나나");
} else if ((food2 = "carrot")) {
  console.log("당근");
} else {
  console.log("이게뭐니????");
}
