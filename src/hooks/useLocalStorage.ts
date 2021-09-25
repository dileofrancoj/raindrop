export const useLocalStorage = () => {
  const getItem = (item: string) => {
    return JSON.parse(localStorage.getItem(item));
  };

  const setItem = (item: string, value: any) => {
    return localStorage.setItem(item, JSON.stringify(value));
  };

  return { getItem, setItem };
};
