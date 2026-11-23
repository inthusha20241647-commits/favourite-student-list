import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    // prevent duplicates
    const exists = favourites.some((item) => item.id === student.id);
    if (exists) return false;
    setFavourites([...favourites, student]);
    return true;
  }

  function removeFavourite(id) {
    setFavourites(favourites.filter((item) => item.id !== id));
  }

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}