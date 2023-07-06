import { useState, createContext } from "react";

export const SideBarContext = createContext();

const SiderbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, handleClose,setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SiderbarProvider;
