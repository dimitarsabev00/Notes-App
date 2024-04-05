import { Note } from "../Types";

export const fetchFromLocalStorage = (itemName: string) => {
  console.log(itemName);
  let data = localStorage.getItem(itemName);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const storeInLocalStorage = (itemName: string, data: Note[]) => {
  localStorage.setItem(itemName, JSON.stringify(data));
};
