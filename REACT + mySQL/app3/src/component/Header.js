// 데이터를 props로 받아서 화면에 표시합니다.
import "./Header.css"


const Header = ( { title, leftChild, rightChild} ) => {
    return (
        <div className = "Header">
            <div className = "header_left">{title}</div>
        <div className = "header_title">{leftChild}</div>
            <div className = "header_right">{rightChild}</div>
        </div>
    )
}

export default Header;