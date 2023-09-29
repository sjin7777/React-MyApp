import { useState } from "react";

function FruitSelect(props) {
    const [choiceValue, setChoiceValue] = useState('grape');


    const handleChange = (event) => setChoiceValue(event.target.value);



    const handleSubmit = (event) => {
        alert(`선택한 과일: ${choiceValue}`);
        event.preventDefault();
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>과일을 선택하세요</label>
                <select value={choiceValue} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </form>
        </div>
    )
}

export default FruitSelect;