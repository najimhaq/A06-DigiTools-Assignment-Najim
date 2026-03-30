import { createContext, useContext, useState } from 'react';

const PropsContext = createContext();

export const CartProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [carts, setCarts] = useState([]);

  const addToCart = (model) => {
    setCarts((prev) => {
      const exists = prev.some((item) => item.id === model.id);
      return exists ? prev : [...prev, model];
    });
  };
  
  const removeFromCart = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <PropsContext.Provider
      value={{
        search,
        setSearch,
        carts,
        setCarts,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </PropsContext.Provider>
  );
};

export const useProps = () => {
  const context = useContext(PropsContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
