import React, { createContext, useEffect, useState } from 'react'
export const userContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [searchText, setsearchText] = useState('')
    const [getTokenData, setgetTokenData] = useState('')
  

    const data = {
        user,
        setUser,
        searchText,
        setsearchText,
        getTokenData,
        setgetTokenData,
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider