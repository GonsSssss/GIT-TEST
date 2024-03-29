let arr = ["banana", "apple", "orange"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// fr 문은 데이터베이스 안의 개별 데이터 원소에 접근하여 for 문을 사용할 수 있습니다.
// arr.length 가 데이터의 길이를 측정하는 명령어이다.\
// arr 내부 데이터 항목이 3개라면 arr.length는 3이 된다.

let p = 0;
while (p < 3) {
  console.log(arr[p]);
  p++;
}
