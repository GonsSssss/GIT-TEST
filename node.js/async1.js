// 1부터 10까지 세는 기능

function waitOneSecond(msg) {
    // promise 객체를만들고 1초씩 쉬었다가 같은 함수를 반복해서 실행하는 함수를 만들었다.
    return new Promise ((resolve, reject) => {
        settimeout (() => resolve(`${msg}`), 1000)
    })
}

async function countOneToTen() {
    // Array(10).keys() 란 0부터 9까지의 정수를 가지고 있는 배열이다. 
    // 근데 배열안에 수를 하나씩 꺼내 써야하는데
    // 이를 가능하게 하는것이 '구조분해할당' 이다.
    // 개별데이터로 쪼개서 하나씩 열람이 가능하게 하는 기능이다.
    // 구조분해할당의 사용법은 간단하다. '...' 을 붙이면 된다.
    for (let x of [...Array(10).keys()]) {
        let result = await waitOneSecond(`${x+1}초 대기중`)
        console.log(result)
    }
}