import { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const[isFull, setIsFull] = useState(false);
    const[count, increaseCount, decreaseCount] = useCounter(0);

    // 의존성 배열이 없는 형태
    // Component가 mount된 직후에 호출되며 이후 Component가 업데이트될 때마다 호출 됨
    useEffect(() => {
        console.log("===============================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });

    // 의존성 배열이 있는 형태 
    // Component가 mount된 직후에 호출되며, count 값이 바뀔 때마다 호출되는데,
    // 용량이 가득 찬 상태인지 아닌지를 isFull state에 저장
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );

}

export default Accommodate;