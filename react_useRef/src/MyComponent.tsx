import { useEffect, useRef } from "react"

export default function MyComponent() {
    const inputRef1 = useRef<HTMLInputElement>(null)
    const inputRef2 = useRef<HTMLInputElement>(null)
    const inputRef3 = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log("Components Rendered")
    })

    function handleClick1() {
        if (inputRef1.current && inputRef2.current && inputRef3.current) {
            inputRef1.current.style.backgroundColor = "black"
            inputRef2.current.style.backgroundColor = ""
            inputRef3.current.style.backgroundColor = ""
        }
    }

    function handleClick2() {
        if (inputRef1.current && inputRef2.current && inputRef3.current) {
            inputRef1.current.style.backgroundColor = ""
            inputRef2.current.style.backgroundColor = "black"
            inputRef3.current.style.backgroundColor = ""
        }
    }

    function handleClick3() {
        if (inputRef1.current && inputRef2.current && inputRef3.current) {
            inputRef1.current.style.backgroundColor = ""
            inputRef2.current.style.backgroundColor = ""
            inputRef3.current.style.backgroundColor = "black"
        }
    }

    return(
        <div className="flex flex-col gap-4">
            <input type="text" ref={inputRef1} className="bg-transparent border-2 border-black rounded-xl py-1"/>
            <button className="bg-blue-400 px-6 py-1 font-bold text-white rounded-xl" onClick={handleClick1}>
                Press Me
            </button>

            <input type="text" ref={inputRef2} className="bg-transparent border-2 border-black rounded-xl py-1"/>
            <button className="bg-red-400 px-6 py-1 font-bold text-white rounded-xl" onClick={handleClick2}>
                Press Me
            </button>

            <input type="text" ref={inputRef3} className="bg-transparent border-2 border-black rounded-xl py-1"/>
            <button className="bg-green-400 px-6 py-1 font-bold text-white rounded-xl" onClick={handleClick3}>
                Press Me
            </button>
        </div>
    )
}
