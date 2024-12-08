function button() {
    let count: number = 0;

    const clickHandler = () => {
        count++;
        alert(`You pressed the button, ${count} times...`)
    }

    return(<button onClick={clickHandler} className="bg-blue-400 px-6 py-2 font-bold text-white rounded-xl m-4">Click Me</button>)
}

export default button
