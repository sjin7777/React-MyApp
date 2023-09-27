import { useState, useCallback } from "react";

function ChildComponent() {

}

function ParentComponent(props) {
    const [count, setCount] = useState(0);

    // useCallback()을 사용하지 않았을 경우
    // 재렌더링 될 때마다 매번 함수가 새로 정의 됨
    const handleClick = (evnet) => { 
        // 클릭 이벤트 처리
    }

    // useCallback()을 사용할 경우
    // 의존성 배열에 빈 배열이 들어갔기 때문에 컴포넌트가 처음 마운트될 때만 함수가 정의되고,
    // 이후에는 다시 정의되지 않으며 결국 자식 컴포넌트도 불필요하게 재렌더링이 일어나지 않게 됨
    const handleClick1 = useCallback((event) => {
        // 클릭 이벤트 처리
    }, []);

    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <ChildComponent handleClick={handleClick} />
            <ChildComponent handleClick={handleClick1} />
        </div>
    )
}

export default ParentComponent;