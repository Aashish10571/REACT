import { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState('#abcabc')

    const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value)
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-8 p-8 border-2 border-black rounded-xl">
                <span className="text-3xl font-bold">
                    Color Piker
                </span>
                <div className="w-[15rem] h-[15rem] flex flex-col justify-end items-center rounded-xl p-4" style={{background: color}}>
                    <span className="text-blue-900 font-bold">
                        Selected : {color}
                    </span>
                </div>
                <span className="text-lg font-semibold">
                    Choose a Color
                </span>
                <input type="color"value={color} onChange={changeColor}  className="bg-transparent border-2 border-black rounded-md"/>
            </div>
        </div>
    )
}

export default ColorPicker
