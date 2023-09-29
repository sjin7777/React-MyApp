import { useState } from "react";

// 호텔 예약 Component
function Reservation(props) {
    const [haveBreakfast, setHaveBreakfest] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${(haveBreakfast) ? "Yes" : "No"},  방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>아침식사 여부: </label>
            <input type="checkbox" checked={haveBreakfast} onChange={(event) => setHaveBreakfest(event.target.checked)} />
            
            <br />

            <label>방문객 수: </label>
            <input type="number" value={numberOfGuest} onChange={(event) => setNumberOfGuest(event.target.value)} />

            <button type="submit">제출</button>
        </form>
    )
}

export default Reservation;