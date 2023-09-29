import { useState } from "react";

// 고객으로부터 요청사항을 입력받기 위한 Component
function RequestForm(props) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => setInputValue(event.target.value);

    const handleSubmit = (event) => {
        alert(`입력한 요청사항: ${inputValue}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>요청사항</label>
            <textarea value={inputValue} placeholder={`요청사항을 입력하세요`} onChange={handleChange}/>
            <button type="submit">제출</button>
        </form>
    )
}

export default RequestForm;