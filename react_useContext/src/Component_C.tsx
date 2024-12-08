import { useContext } from "react";
import Component_D from "./Component_D";
import { UserContext } from "./context";

export default function Component_C() {
    const user = useContext(UserContext)

    return(
        <div className="bg-blue-200 border-2 border-blue-400 p-8 flex flex-col items-center gap-3 rounded-xl">
            <span className="text-2xl font-bold">
                Component C
            </span>
            <p className="font-semibold">
                name : {user?.name} | age : {user?.age}
            </p>
            <Component_D/>
        </div>
    )
}
