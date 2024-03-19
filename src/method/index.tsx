import { useAppContext } from "../context";
import { DataType } from "../types";

export const ListMethod = () => {
  const { setItems, setIsLoading } = useAppContext();
  const searchFunction = async (keyword: string) => {
    setIsLoading(true);
    try {
      const searchRes: { results: DataType[], resultCount: number; } = await fetch(`https://itunes.apple.com/search?term=${ keyword }`).then(res => res.json());
      if (searchRes.resultCount>0) {
        setItems(searchRes.results);
        setIsLoading(false);
      } else {
        setIsLoading(false)
      }
    }
    catch (err) {
      setIsLoading(false);
      console.error('error', err);
    }

  };
  return {
    searchFunction
  };
};