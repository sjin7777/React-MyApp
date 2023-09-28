import React, { useState } from "react";

class ConfirmButtonClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // 확인 여부를 저장하기 위한 state (기본값은 false)
            isConfirmed: false
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // 버튼의 onClick 이벤트를 처리하기 위한 Event Handler
    // constructor()에서 bind를 사용하는 방식으로 Event Handler를 처리
    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    // Class fields syntax 방식으로 Event Handler를 처리
    handleCFSConfirm = () => { this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed}));}

    render() {
        return (
            <div>
                <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                    {this.state.isConfirmed ? "완료" : "확인 필요"}
                </button>
                <button onClick={this.handleCFSConfirm} disabled={this.state.isConfirmed}>
                    {this.state.isConfirmed ? "완료" : "확인 필요"}
                </button>
            </div>
        )
    }

}

function ConfirmButton() {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => setIsClick(prevState => !prevState);

    return (
        <div>
            <button onClick={handleClick} disabled={isClick}>{ isClick ? "완료" : "확인 필요"}</button>
        </div>
    )

}

export default ConfirmButton;