import { useState } from "react";

function NameForm() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => setInputValue(event.target.value);

    const handleSubmit = (event) => {
        alert(`입력한 이름: ${inputValue}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;