import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [lastScanned, setLastScanned] = useState([]);

  const addScannedProduct = (product) => {
    setLastScanned((prev) => {
      const updated = [product, ...prev];
      return updated.slice(0, 3); // keep last 3
    });
  };

  return (
    <StoreContext.Provider value={{ lastScanned, addScannedProduct }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
