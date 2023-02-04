import React, { createContext, useContext, useState } from 'react';



const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState("ostad learner")


    return (
        <UserContext.Provider value={[user, setUser]}>

            {children}

        </UserContext.Provider>
    );
};
const useUser = () => useContext(UserContext)


export { useUser, UserProvider };