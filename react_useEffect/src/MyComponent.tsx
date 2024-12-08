import { useState, useEffect } from "react";

function MyComponent() {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [height, setHeight] = useState<number>(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleScreenResize)

        return(
            window.removeEventListener('resize', handleScreenResize)
        )
    },[])

    function handleScreenResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
            <span className="text-blue-800 text-3xl font-bold font-serif">
                width : {width} Height : {height}
            </span>
        </div>
    )
}

export default MyComponent
