import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const handleChangeName = (event) => setName(event.target.value);
    const handleChangeGender = (event) => setGender(event.target.value);

    const handleSubmit = (event) => {
        if(name === "") {
            alert(`이름 입력하세요`);
        }
        if(gender === "") {
            alert(`성별을 선택해주세요`);
        }

        event.preventDefault();

        if(name !== "" && gender !== "") {
            alert(`이름: ${name},  성별: ${gender}`);
            setName("");
            setGender("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={name} onChange={handleChangeName}/>
            <select value={gender} onChange={handleChangeGender}>
                <option value="">== 선택하기 ==</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select>

            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp;