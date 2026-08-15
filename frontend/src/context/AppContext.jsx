import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [crop, setCrop] = useState("cotton");
  const [location, setLocation] = useState("Rajkot");
  const [quantity, setQuantity] = useState(25);

  return (
    <AppContext.Provider
      value={{
        crop,
        setCrop,
        location,
        setLocation,
        quantity,
        setQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
