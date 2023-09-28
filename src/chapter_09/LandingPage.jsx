import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    // useState()를 사용해서 사용자의 로그인 여부를 자체적으로 관리
    const [isLoggedIn, setInLoggedIn] = useState(false);

    const onClickLogin = () => setInLoggedIn(true);
    const onClickLogout = () => setInLoggedIn(false);

    return (
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
            <div style={{ padding: 16 }} >리액트 공부</div>
        </div>
    )

}

export default LandingPage;