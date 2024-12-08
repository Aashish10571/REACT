import React, { useState } from "react";

type carDetails = {
    year: number
    manufacturer: string
    model: string
}

function MyComponent() {
    const [cars, setCars] = useState<carDetails[]>([])
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [manufacturer, setManufacturer] = useState<string>('')
    const [model, setModel] = useState<string>('')

    const addNewCarObj = () => {
        if (manufacturer === '' || model === '') {
            return
        }

        const newCar: carDetails = {
            year: year,
            manufacturer: manufacturer,
            model: model
        }

        setCars(car => [...car, newCar])

        setYear(new Date().getFullYear())
        setManufacturer('')
        setModel('')
    }

    const removeCarObj = (index: number) => {
        setCars(car => car.filter((_, i) => i !== index))
    }

    const changeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
            setYear(Number(event.target.value))
    }

    const changeManufacturer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setManufacturer(event.target.value)
    }


    const changeModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value)
    }

    return(
        <div className="w-screen h-screen p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-10">
                <h2 className="text-center text-[2.7rem] font-extrabold capitalize">
                    list of cars
                </h2>
                <ul className="list-decimal list-inside font-semibold flex flex-col gap-1 text-lg">
                    {cars.map((car, index) =>
                        <li key={index} className="px-2 py-2 rounded-full capitalize hover:bg-red-200" onClick={() => removeCarObj(index)}>
                            {car.year} - {car.manufacturer} - {car.model}
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex flex-col gap-3 font-semibold">
                <input type="number"  className="bg-transparent border-2 border-black px-4 py-2 rounded-full" value={year} onChange={changeYear}/>
                <input type="text" className="bg-transparent border-2 border-black px-4 py-2 rounded-full capitalize" placeholder="enter manufacturer..." value={manufacturer} onChange={changeManufacturer}/>
                <input type="text" className="bg-transparent border-2 border-black px-4 py-2 rounded-full capitalize"
                placeholder="enter model..." value={model} onChange={changeModel}/>
                <button className="bg-green-400 text-lg text-white font-bold py-2 rounded-full capitalize" onClick={addNewCarObj}>
                    add car
                </button>
            </div>
        </div>
    )
}

export default MyComponent
