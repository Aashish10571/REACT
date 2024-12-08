type propObject = {
    name: string
    age: number
    isStudent: boolean
}


function student(props: propObject) {
    return(
        <div className="w-fit h-fit flex flex-col gap-2 px-4 py-6 border-2 border-black rounded-xl m-4">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

student.defaultProps = {
    name: "Guest",
    age: 2,
    isStudent: false
}

export default student
