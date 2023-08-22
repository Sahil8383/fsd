import React, { useContext, useState } from 'react'


const Context = React.createContext()


export const ContextProvider = ({ children }) => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Context.Provider value={{ showSidebar, setShowSidebar}}>
            {children}
        </Context.Provider>
    )
}

export default Context