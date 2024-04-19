const DB = [];
//  프라미스는 이전 함수의 결과가 콜백처럼 연결되지 않으므로
//  (user, callback) 이런식으로 결과르 ㄹ인풋으로 받는 인수는 빠집니다.
function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save${user.name} to DB`)
    // 결과값 자체를 전달치 않고 promise라는 객체를 생성하여
    // 그 객체안에 (resolve, reject)를 입력값으로 받는 함수를 생성합니다,
    // resolve, reject = 이행, 거절
    return new Promise((resolve, reject) => {
        // 
        if(DB.length > oldDBSize) {
            // 성공한 경우, 유저정보 반환
            resolve(user) 
        }
        else{
            // 실패한 경우 Error 메세지 출력
            reject(new Error("DB error"))
        }
    })
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user)
    })
}

function getReturn(user) {
    return new Promise((resolve, reject) =>{
        resolve(`success register ${user.name}`);
    })
}
function registerByPromise(user) {
    const result1 = saveDB(user).then(sendEmail).then(getReturn);
    // 결과를 출력해주는 동시에 정식으로 리턴값으로 반환해줌
    console.log(result1);
    return result1;
}

const myUser = register({email: "gmlrhs2@gmail.com", password: "1020", name: "HG"})
const result = registerByPromise(myUser)
result.then(console.log);