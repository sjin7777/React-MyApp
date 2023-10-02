import styled from "styled-components";

// Button Component
const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;

// Button에 style이 추가된 RoundedButton Component
const RoundedButton = styled(Button)`
    border-radius: 16px;
`;


function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark={props}>Dark</Button>
            <RoundedButton>Rounded</RoundedButton>
        </div>
    )
}

export default Sample;