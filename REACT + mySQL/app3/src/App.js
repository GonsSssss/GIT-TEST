import { Routes, Route, Link} from "react-router-dom"
import {useReducer, useRef} from "react";
import './App.css';
import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Edit from "./pages/Edit"


function reducer(state, action) {
  // 
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, [])
  return (
    <div className="App">
      {/* Routes 는 자기가 감싸는 Route 컴포넌트 중에 페이지 역할 컴포넌트를 별도관리
      pages 폴더를 생성
      그래서 url 주소를 가지는 화면 컴포넌트는 pages 폴더에 모은다. */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      {/* 동적 경로를 표현하기 위해 '/diary/:id' 로 주소 오픈하겠습니다.
      따라서, diary.js 에 가서 id 값 설정해야합니다. */}
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='/edit' element={<Edit/>}/>
      </Routes> 
      <div>
        {/* Link 기능 사용
        <Link to={"/"}>메인입니다.</Link>
        <Link to={"/new"}>new 입니다.</Link>
        <Link to={"/diary"}>diary 입니다.</Link>
        <Link to={"/edit"}>edit 입니다.</Link> */}
      </div>
    </div>
  );
}

export default App;
