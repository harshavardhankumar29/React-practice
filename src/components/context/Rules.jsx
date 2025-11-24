import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(prev => prev + 1);
  const dec = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, inc, dec, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
