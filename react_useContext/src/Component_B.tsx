import { useContext } from "react";
import Component_C from "./Component_C";
import { UserContext } from "./context";

export default function Component_B() {
    const user = useContext(UserContext)

    return(
        <div className="bg-green-200 border-2 border-green-400 p-8 flex flex-col items-center gap-3 rounded-xl">
            <span className="text-2xl font-bold">
                Component B
            </span>
            <p className="font-semibold">
                name : {user?.name} | age : {user?.age}
            </p>
            <Component_C/>
        </div>
    )
}
