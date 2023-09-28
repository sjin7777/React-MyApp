const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBotton: "1px solid grey"
    },

    greeting: {
        marginRight: 8
    }
}

// props로 사용자의 로그인 여부를 나타내는 isLoggedIn 값을 받음
// isLoggedIn으로 조건부 렌더링을 사용하여 환영 메시지를 표시하거나 감추고, 로그인 버튼 또는 로그아웃 버튼을 보여주는 역할을 함 
function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {/* inline if (&& 연산자) */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}

            {/* inline if-else (삼항 연산자) */}
            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
            
        </div>
    )
}

export default Toolbar;