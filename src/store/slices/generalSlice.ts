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
      const updatedNotes = [...state.notes, newPost];
      storeInLocalStorage("notes", updatedNotes);
      return { ...state, notes: updatedNotes };
    },

    removeNote(state, action: PayloadAction<string>) {
      const tempId = action.payload;
      const tempNotes = state.notes.filter((note) => note.noteId !== tempId);
      return { ...state, notes: tempNotes };
    },

    editNote(state, action) {
      const { noteId, noteTitle, noteContent } = action.payload;
      const tempNotes = state.notes.map((note) => {
        if (note.noteId === noteId) {
          note.noteTitle = noteTitle;
          note.noteContent = noteContent;
          note.noteDate = new Date().toISOString();
        }
        return note;
      });

      state.notes = tempNotes;
      storeInLocalStorage("notes", tempNotes);
    },
  },
});
export const { addNewNote, removeNote, editNote } = generalSlice.actions;

export const getAllNotes = (state: {
  generalSlice: GeneralSliceInitialState;
}) => state.generalSlice.notes;

export default generalSlice.reducer;
