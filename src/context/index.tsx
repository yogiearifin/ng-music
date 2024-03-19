import { createContext, useContext, useState } from "react";
import { DataType } from "../types";

type AppContextType = {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  items: DataType[];
  setItems: React.Dispatch<React.SetStateAction<DataType[]>>;
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  search: '',
  setSearch: () => { },
  items: [],
  setItems: () => { },
  isLoading: false,
  setIsLoading: () => { },
  isOpen: false,
  setIsOpen: () => { }
});

export const AppContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={ { search, setSearch, items, setItems, isLoading, setIsLoading, isOpen, setIsOpen } }
    >
      { children }
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("UseAppContext must be used within a AppContextProvider");
  }
  return context;
};
