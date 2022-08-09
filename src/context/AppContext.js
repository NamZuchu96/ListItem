import React, { useState } from "react";
const AppContext = React.createContext();
export default AppContext; 

export const AppProvider = ({ children }) => {
  const [username1, setUserName1] = useState(``);
  const [password1, setPassword1] = useState(``);
  return (
    <AppContext.Provider
      value={{ username1, setUserName1, password1, setPassword1 }}
    >
      {children}
    </AppContext.Provider>
  );
};

