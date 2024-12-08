import { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(['burger', 'pizza', 'momo'])

    const AddFood = () => {
        const foodInputBox: HTMLInputElement | null = document.getElementById('foodInput') as HTMLInputElement

        const newItem: string = foodInputBox.value
        foodInputBox.value = ''

        if (newItem !== '') {
            setFoods(food => [...food, newItem])
        }
    }

    const RemoveFood = (index: number) => {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
        <div className="w-screen h-screen flex flex-col justify-between p-4">
            <div className="flex-1 flex flex-col gap-12">
                <h2 className="text-5xl font-extrabold capitalize text-center">
                    List of Food
                </h2>
                <ul className="list-decimal list-inside flex flex-col gap-1">
                    {foods.map((food, index) =>
                        <li key={index} className="text-lg font-semibold capitalize px-2 py-1 hover:bg-red-200 rounded-xl cursor-pointer" onClick={() => RemoveFood(index)}>
                            {food}
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex gap-4">
                <input type="text" id="foodInput" className=" flex-1 bg-transparent text-lg font-semibold border-2 border-black px-4 py-1 rounded-full" placeholder="Enter foods..."/>
                <button className="bg-green-400 text-white text-lg font-bold border-2 border-green-500 px-8 py-1 rounded-full" onClick={AddFood}>
                    Add Food
                </button>
            </div>
        </div>
    )
}

export default MyComponent
