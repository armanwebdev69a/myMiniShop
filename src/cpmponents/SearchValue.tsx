import React, { createContext, useContext, useState } from "react"

interface InputVaue {
    value:string,
    addValue:(newValue:string)=>void
}

const InputValue = createContext<InputVaue|null>(null)

export function SearchProvider( {children} : {children:React.ReactNode} ) {
    const [value,setValue] = useState("")
    const addValue = (newValue:string)=>{
        setValue(newValue)
    }
  return (
    <InputValue.Provider value={{value,addValue}}>
        {children}
    </InputValue.Provider>
  )
}


export function useSearch() {
  const context = useContext(InputValue)
  if (!context){
    return {
        value:"",
        addValue:()=>{
        }
    }
  }
  return context;
}

