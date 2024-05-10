import Header from "../component/Header"
// import { useSearchParams } from "react-router-dom";
import Button from "../component/Button"
import Editor from "../component/Editor"
import Test2 from "../component/Test2"

const Home = () => {
    // // const [searchParams, setSearchParams] = useSearchParams();
    // // console.log(searchParams.get("sort"))
    let button_type1 = "버튼 글자데이터9999"
    let button_type = "positive"  // 추가
    const button_action1 = () => {
        if (button_type == "negative") {
            alert("기분 안좋네")
        }
        else if (button_type == "positive") {
            alert("기분 좋네")
        }
        else {
            alert("그닥")
        }
    }

    return (<div>
        <Header
            title={"홈주소입니다"}
            leftChild={
                <Button
                    type="positive"
                    text="기분이 좋아"
                    onClick={() => { alert("기분 좋네") }} />
            }
            rightChild={
                <Button
                    type="negative"
                    text="기분이 안좋아"
                    onClick={() => { alert("기분 안좋네") }} />
            }
        />
        {/* onSubmit 이동경로.
        Home.js 에서 화면을 담당하는 Editor.js에 props로 보냄
        Editor.js 에서 onSubmit을 Button.js 로 보냄
        Button이 기능 컴포넌트를 받고 이벤트 함수 실행
        그게 Home.js에 정의된 출력 함수 onSubmit 실행 */}
        <Editor onSubmit ={() => {alert("제출하겠습니다.")}}/>
        <Test2 />

    </div>)
}

export default Home;

