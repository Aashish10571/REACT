import React, { useState } from "react";

interface birthDate {
    year: number
    month: number
    day: number
}

function MyComponent() {
    const currentDate: Date = new Date()
    const currentYear: number = currentDate.getFullYear()
    const currentMonth: number = currentDate.getMonth() + 1
    const currentDay: number = currentDate.getDate()

    const [birthDate, setBirthDate] = useState<birthDate>({
        year: currentYear,
        month: currentMonth,
        day: currentDay
    })

    const changeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) >= (currentYear - 100) && Number(event.target.value) <= currentYear)
            setBirthDate(BD => ({ ...BD, year: Number(event.target.value) }))
    }

    const changeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) >= 1 && Number(event.target.value) <= 12)
            setBirthDate(BD => ({ ...BD, month: Number(event.target.value) }))
    }

    const changeDay = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) >= 1 && Number(event.target.value) <= (new Date(currentYear, currentMonth, 0).getDate()))
            setBirthDate(BD => ({ ...BD, day: Number(event.target.value) }))
    }

    return(
        <div className="flex flex-col gap-10">
            <span className="text-center text-3xl font-bold">
                Birth Day : {birthDate.year} / {birthDate.month} / {birthDate.day}
            </span>
            <div className="max-w-[400px] flex gap-3 text-lg font-semibold">
                <input type="number"  value={birthDate.year} onChange={changeYear}
                className="w-1/3 bg-transparent border-2 border-black px-2 py-2 rounded-xl"/>
                <input type="number" value={birthDate.month} onChange={changeMonth}
                className="w-1/3 bg-transparent border-2 border-black px-2 py-2 rounded-xl"/>
                <input type="number" value={birthDate.day} onChange={changeDay}
                className="w-1/3 bg-transparent border-2 border-black px-2 py-2 rounded-xl"/>
            </div>
        </div>
    )
}

export default MyComponent
