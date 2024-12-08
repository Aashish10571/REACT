import { createContext } from "react";
import { User } from "./Component_A";

export const UserContext = createContext<User | undefined>(undefined)
