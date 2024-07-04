import React, { createContext, useEffect, useState } from 'react'
export const userContext = createContext();
const token = localStorage.getItem("token");
import axios from 'axios'

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [searchText, setsearchText] = useState('')
    const [getTokenData, setgetTokenData] = useState('')

    async function getToken() {
        if (token) {
            const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Autentications/GetCurrentUser", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
            })
            setgetTokenData(res.data)
        }
    }

    const data = {
        user,
        setUser,
        searchText,
        setsearchText,
        getTokenData,
        setgetTokenData,
    }
    useEffect(() => {
        getToken()
    }, [])

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider