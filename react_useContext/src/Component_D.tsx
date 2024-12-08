import { useContext } from "react"
import { UserContext } from "./context"

export default function Component_D() {
    const user = useContext(UserContext)

    return(
        <div className="bg-yellow-200 border-2 border-yellow-400 p-8 flex flex-col items-center gap-3 rounded-xl">
            <span className="text-2xl font-bold">
                Component D
            </span>
            <p className="font-semibold">
                name : {user?.name} | age : {user?.age}
            </p>
        </div>
    )
}
