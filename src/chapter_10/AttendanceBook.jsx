const students1 = [
    {
        name: "A"
    },
    {
        name: "B"
    },
    {
        name: "C"
    },
    {
        name: "D"
    }
];

const students2 = [
    {
        id: 1,
        name: "E"
    },
    {
        id: 2,
        name: "F"
    },
    {
        id: 3,
        name: "G"
    },
    {
        id: 4,
        name: "H"
    }
];


function AttendanceBook(props) {
    return(
        <div>
            <div>1반</div>
            <ul>
                {students1.map((student, index) => {
                    return <li key={index}>{student.name}</li>
                })}
            </ul>
            <hr />
            <div>2반</div>
            <ul>
                {students2.map((student) => {
                    // return <li key={student.id}>{student.name}</li>
                    return <li key={`student-id-${student.id}`}>{student.name}</li>
                })}
            </ul>
        </div>
    )
}

export default AttendanceBook;