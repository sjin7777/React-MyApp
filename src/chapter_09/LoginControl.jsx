import { useState } from "react";


function UserGreeting(props) {
    return <h1>환영합니다</h1>
}

function GuestGreeting(props) {
    return <h1>로그인을 해주세요</h1>
}

// props로 들어오는 isLoggedIn의 값에 따라서 화면에 출력되는 결과가 달라짐
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}




function LoginBtn(props) {
    return <button onClick={props.onClick}>로그인</button>
}

function LogoutBtn(props) {
    return <button onClick={props.onClick}>로그아웃</button>
} 




// 사용자의 로그인 여부에 따라 앞에 나온 로그인 버튼과 로그아웃 버튼 Component를 선택적으로 보여주게 됨
/* Element Variables 방법 (Element를 변수처럼 저장하여 사용) */
function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => { setIsLoggedIn(true);}
    const handleLogoutClick = () => { setIsLoggedIn(false);}

    let button;
    // isLoggedIn의 값에 따라서 button이라는 변수의 컴포넌트를 대입
    // Element를 변수처럼 저장해서 사용하는 방법 (Element Variables)
    if(isLoggedIn) {
        button = <LogoutBtn onClick={handleLogoutClick}/>
    } else {
        button = <LoginBtn onClick={handleLoginClick}/>
    }

    // {button} : Component가 대입된 변수를 return에 넣어 실제 Component(로부터 생성된 React Element)가 렌더링이 되도록 함
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    )
}


/* Inline if-else 방법 (삼항연산자 사용) */
function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => { setIsLoggedIn(true);}
    const handleLogoutClick = () => { setIsLoggedIn(false);}

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn ? <LogoutBtn onClick={handleLogoutClick} /> : <LoginBtn onClick={handleLoginClick}/>}
        </div>
    )


}

export default LoginControl2;