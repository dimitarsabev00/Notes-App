import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
  fetchFromLocalStorage,
  storeInLocalStorage,
} from "../../utils/helpers";
import { GeneralSliceInitialState, Note } from "../../Types";

const initialState: GeneralSliceInitialState = {
  notes: fetchFromLocalStorage("notes"),
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    addNewNote(
      state,
      action: PayloadAction<{ noteTitle: string; noteContent: string }>
    ) {
      const { noteTitle, noteContent } = action.payload;
      const noteId = uuid();
      const newPost: Note = {
        noteId,
        noteTitle,
        noteContent,
        noteDate: new Date().toISOString(),
      };
      state.notes.push(newPost);
      storeInLocalStorage("notes", state.notes);
    },
  },
});
export const { addNewNote } = generalSlice.actions;
export const getAllNotes = (state) => state.generalSlice.notes;

export default generalSlice.reducer;
