import React from 'react';

// Book이라는 이름의 리액트 함수 Component 생성
// Book Component는 props로 name과 numOfPage를 받아서 페이지를 출력하는 Component
function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
        </div>
    );
}

// JSX를 사용하지 않고 작성한 Book Component
if(false) {
    function Book(props) {
        return React.createElement(
            'div',
            null,
            [
                React.createElement(
                    'h1',
                    null,
                    `이 책의 이름은 ${props.name}입니다.`
                ),
                React.createElement(
                    'h2',
                    null,
                    `이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`
                )
            ]
        )
    }
}


export default Book;