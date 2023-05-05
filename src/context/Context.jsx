import { createContext, useState } from "react";
export const Context = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  return (
    <Context.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        city,
        setCity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
