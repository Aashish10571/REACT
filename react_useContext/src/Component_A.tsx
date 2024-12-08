import { useState } from "react";
import Component_B from "./Component_B";
import { UserContext } from "./context";

export interface User {
    name: string
    age: number
}

export default function Component_A() {
    const [user] = useState<User>({
        name: 'Aashish',
        age: 20
    })

    return(
        <div className="bg-red-200 border-2 border-red-400 p-8 flex flex-col items-center gap-3 rounded-xl">
            <span className="text-2xl font-bold">
                Component A
            </span>
            <p className="font-semibold">
                name : {user.name} | age : {user.age}
            </p>
            <UserContext.Provider value={user}>
                <Component_B/>
            </UserContext.Provider>
        </div>
    )
}
