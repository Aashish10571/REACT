import { useEffect, useRef, useState } from "react"

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [elapsedTime, setElapsedTime] = useState<number>(0)
    const intervalRef = useRef<number>(0)
    const startTimeRef = useRef<number>(0)

    useEffect(() => {
        if (isRunning)
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop() {
        setIsRunning(false)
    }

    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }

    function displayTime() {
        const hour: number = Math.floor(elapsedTime / (1000 * 60 * 60))
        const minute: number = Math.floor((elapsedTime / (1000 * 60)) % 60)
        const seconds: number = Math.floor((elapsedTime / (1000)) % 60)

        const formatedHour: string = String(hour).padStart(2, '0')
        const formatedMinute: string = String(minute).padStart(2, '0')
        const formatedSeconds = String(seconds).padStart(2, '0')

        return `${formatedHour}:${formatedMinute}:${formatedSeconds}:`
    }

    function displayMilli() {
        const milli: number = Math.floor((elapsedTime % 1000) / 10)

        const formatedMilli = String(milli).padStart(2, '0')

        return `${formatedMilli}`
    }

    return(
        <div className="flex flex-col gap-10 border-4 border-black p-10 rounded-2xl">
            <span className="text-6xl font-bold font-mono">
                {displayTime()}
                    <span className="text-3xl">
                        {displayMilli()}
                    </span>
            </span>
            <div className="text-lg text-white font-bold flex justify-between">
                <button className="bg-green-400 px-6 py-2 rounded-2xl" onClick={start}>
                    Start
                </button>
                <button className="bg-red-400 px-6 py-2 rounded-2xl" onClick={stop}>
                    Stop
                </button>
                <button className="bg-blue-400 px-6 py-2 rounded-2xl" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}
