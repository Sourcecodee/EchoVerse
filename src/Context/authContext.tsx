import { createContext } from 'react'

type Confirm ={
    dropDown: boolean;
    setDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext< Confirm | null >(null)