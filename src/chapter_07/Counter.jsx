import { useState, useEffect } from "react";

function Counter(props) {
    // let count = 0;
    const [count, setCount] = useState(0);

    // const onClick = () => setCount((prev) => prev + 1);

    // componentDidMount, componentDidUpdate와 비슷하게 작동
    // useEffect(함수, 배열) 인데, 배열을 생략했으므로 component가 업데이트될 때마다 실행됨
    // 의존성 배열 없이 useEffect를 사용하면 React는 DOM이 변경된 이후에 해당 이펙트함수를 실행하라는 의미로 받아들임
    useEffect(() => {

        // 브라우저 API를 사용해서 document의 title을 업데이트
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            {/* <button onClick={onClick}>클릭</button> */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}

export default Counter;