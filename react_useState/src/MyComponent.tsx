import {useState} from "react"

function MyComponent () {
    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(1)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName('Aashish')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div className="flex flex-col gap-6 m-4">
            <p className="text-xl font-semibold">
                Name : {name}
            </p>
            <button onClick={updateName} className="bg-blue-400 text-white font-bold  py-2 rounded-xl">
                Set Name
            </button>

            <p className="text-xl font-semibold">
                Age : {age}
            </p>
            <button onClick={incrementAge} className="bg-green-400 text-white font-bold  py-2 rounded-xl">
                Increase Age
            </button>

            <p className="text-xl font-semibold">
                Employed : {isEmployed ? "Yes" : 'No'}
            </p>
            <button onClick={toggleEmployedStatus} className="bg-yellow-400 text-white font-bold  py-2 rounded-xl">
                Toggle Status
            </button>
        </div>
    )
}

export default MyComponent
