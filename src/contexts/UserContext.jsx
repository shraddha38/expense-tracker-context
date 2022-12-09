import React from 'react';

const loggedInUser = {
    name: "Shraddha Sharma",
    email: "shraddhasharmapro@gmail.com",
}
const loggedOutUser = {
    name: "Sushant Sharma",
    email: "shraddhasharmapro@gmail.com",
}
const userInformation = [loggedInUser, loggedOutUser]
export const UserContext = React.createContext(userInformation);
