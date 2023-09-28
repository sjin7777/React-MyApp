import React, { useState } from "react";

class ToggleClass extends React.Component {
    constructor(props) {
        super(props);

        // Toggle Component의 state
        this.state = { isToggleOn: true };

        
        // callback에서 'this'를 사용하기 위해서는 바인딩을 필수적으로 해주어야 함
        // 바인딩을 해야하는 이유
        //  - JS에서는 기본적으로 클래스 함수들이 바운드되지 않기 때문
        //  - 그렇기 때문에, 바인딩을하지 않으면 this.handleClick은 Global Scope에서 호출됨
        //   Global Scope에서 this.handleClick은 undefined임으로 사용할 수 없음
        //  - 함수 이름 뒤에 괄호 없이 사용하려면 무조건 해당 함수를 bind 해주어야 함
        this.handleClick = this.handleClick.bind(this);
    }

    //  방법 1.
    // handleClick 함수를 정의 (일반 함수를 정의하는 것과 동일하게 정의)
    // 정의 후 Constructor에서 bind를 이용하여 this.handleClick에 대입해줌
    // 버튼 클릭 시 호출됨
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log('1. this is: ' + this);
    }

    // 방법 2.
    // bind 사용 안 하고 Component에서 noBindHandleClick 함수 정의하고 사용하는 법
    // Class fields syntax
    noBindHandleClick = () => {
        console.log('2. this is: ' + this);
    }

    // 방법 3.
    // bind, class fields syntax도 사용하지 않고 함수 정의하고 사용하는 법
    // 이 함수를 넣는 태그에 arrow function을 사용
    // 이 방식은 Component가 렌더링될 때마다 다른 callback 함수가 생성되는 문제가 있음
    //  - 대부분은 상관 없지만, callback 함수가 하위 컴포넌트에 풀합으로 넘겨지게 되면, 하위 컴포넌트에서 추가적인 렌더링이 발생하게 됨
    //  - 그렇기에 혹시 모를 성능 문제를 위해 바인딩이나 class fields syntax를 사용하기를 권장
    noBindNoCFSHandleClick() {
        console.log('3. this is: ' + this);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? '켜짐' : '꺼짐'}</button>
                <button onClick={this.noBindHandleClick}>Bind 안함</button>
                <button onClick={() => this.noBindNoCFSHandleClick()}>Bind, CFS 안함</button>
            </div>
        );
    }
    
}


function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    const [count, setCount] = useState(0);

    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn)=> !isToggleOn);
    }

    // 방법 2. arrow function을 사용하여 정의
    const arrowHandleClick = () => setCount((count) => count + 1);

    const handleDelete = (id, event) => console.log(id, event.target);


    return (
        <div>
            <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>
            <button onClick={arrowHandleClick}>{count}</button>
            <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>
        </div>
    )
}


export default Toggle;