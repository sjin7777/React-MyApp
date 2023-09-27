import { useRef } from "react";

// useRef()를 사용하여 버튼 클릭 시 input에 focus하도록 하는 함수
function TextInputWithFocusButton(props) {
    // 초기값으로 null
    const inputElem = useRef(null);
    
    
    const onButtonClick = () => {
        // 'current'는 mount된 input element를 가리킴
        // 실제 element에 접근하여 focus 함수 호출
        inputElem.current.focus();
    }
    
    // 결과로 반환된 inputElim이라는 Reference 객체를 input 태그에 넣음
    return (
        <>
            <input ref={inputElem} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>        
        </>
    )
}

export default TextInputWithFocusButton;