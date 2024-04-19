//  예시 : 회원가입 절차를 담을 프로그램
//  회원가입 api를 호출하면 1. db에 저장하고 2. 이메일을 보내고 3. 성공 메세지 출력

const DB = [];

// 회원가입 함수
// saveDB, sendEmail, getReturn 함수를 차례로 호출하여 프로그램을 실행합니다.
// 이전 함수의 결과가 완전히 나와야 그 결과가 다음 함수의 입력값이 되므로
// 이전 함수의 결과가 나오지 않으면 다음작업은 되지 않습니다.
function register(user){
    return saveDB(user, function(user){ //콜백1
        return sendEmail(user, function(user){ //콜백2
            return getReturn(user); //콜백3
        })
    })
}

function saveDB(user, callback) {
    // 코드 실행 시 입력받은 유저데이터를 push 명령어로 db 리스트 자료구조에 저장
    DB.push(user);
    // 자료구조에 입력받은 데이터 저장 후 save ${user.name} to DB라는 메세지 출력
    console.log(`save ${user.name} to DB`);
    // 자료구조 저장 후 결과값 반환하여 다음 함수가 입력값으로 쓸 수 있도록 함
    return callback(user);
}
// 데이터 안의 이메일 주소를 출력해주고 나서 다음 함수에게 결과값 전달
function sendEmail(user, callback) {
        console.log(`email to ${user.email}`);
        return callback(user);
}

// 최종적으로 모든게 잘 마무리 되면 success register메세지 반환
function getReturn(user) {
    return `success register ${user.name}`;
}

//  register라는 이름으로 콜백함수를 잘 정의하였으니 데이터를 넣고 써봅시다.
const result = register({email: "gmlrhs2@gmail.com", password: "1020", name: "HG"})
console.log(result)

// 결론 - register 콜백함수는 데이터를 받아서 DB변수에 저장한 뒤에
// EMAIL 주소를 출력하고 사람 이름을 출력하는 일련의 과정을 순차적으로
// 콜백 기능을 적극 활용하여 특정 과정이 먼저 진행되지 않도록 조치
// 원리를 설명한대로, 함수 > 함수 > 함수 이므로 실수하기 좋은 구조이다.

// 실제 콜백은 에러나면 크게 문제된다.
// 7단계 콜백함수에서 각 함수의 코드가 수백줄이라 가정한다면
// 몇번재 콜백함수안의 몇번째줄 코드가 문제인지 파악이 어렵다.