import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;


function MainPage(props) {
    return(
        <Wrapper>
            <Title>
                안녕 리액트!
            </Title>
        </Wrapper>
    )
}

export default MainPage;




const name = "SJ";
const region = "인천";

function myTagFunction(strings, nameExp, regionExp) {
    let str0 = strings[0];      //  "제 이름은 "
    let str1 = strings[1];      //  "이고, 사는 곳은 "
    let str2 = strings[2];      //  "입니다."

    // 여기에서도 template literal을 사용하여 리턴할 수 있음
    return `${str0}${nameExp}${str1}${regionExp}${str2}`;
}

const output = myTagFunction`제 이름은 ${name}이고, 사는 곳은 ${region}입니다.`

// 출력 결과: 제 이름은 SJ이고, 사는 곳은 인천입니다.
console.log(output);
