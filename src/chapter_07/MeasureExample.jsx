import { useState, useCallback } from "react";

// useRef()를 사용하지 않고, useCallback()을 사용하는 CallbackRef 방식
// useRef()를 사용하게 되면, Reference 객체가 current 속성이 변경되었는지를 따로 알려주지 않기 때문
// Callback ref 방식을 사용하게 되면 자식 Component가 변경되었을 때 알림을 받을 수 있고, 이를 통해 다른 정보들을 업데이트 할 수 있음
function MeasureExample(props) {
    const [height, setHeight] = useState(0);

    // 의존성 배열이 빈배열이므로 h1태그가 mount, unmount될 때만 callback 함수가 호출되어
    // 재렌더링이 일어날 때는 호출되지 않음
    const measuredRef = useCallback(node => {
        if(node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    // h1 태그의 높이 값을 매번 업데이트해줌
    return (
        <>
            <h1 ref={measuredRef}>안녕 리액트</h1>
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    )
}

export default MeasureExample;