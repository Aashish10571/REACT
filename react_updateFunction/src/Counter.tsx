import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(c => c + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const decreaseCount = () => {
        setCount(c => c - 1)
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-fit bg-slate-200 flex flex-col items-center gap-16 px-6 py-8 rounded-xl">
                <span className="text-9xl font-semibold">
                    {count}
                </span>
                <div className="flex gap-4">
                    <button onClick={decreaseCount} className="bg-green-400 text-white px-4 py-2 rounded-xl font-bold">
                        Decrease
                    </button>
                    <button onClick={resetCount} className="bg-red-400 text-white px-4 py-2 rounded-xl font-bold">
                        Reset
                    </button>
                    <button onClick={increaseCount} className="bg-green-400 text-white px-4 py-2 rounded-xl font-bold">
                        Increase
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter
