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
    removeNote(state, action) {
      const tempId = action.payload;
      const tempNotes = state.notes.filter((note) => note.noteId !== tempId);
      state.notes = tempNotes;
      storeInLocalStorage("notes", tempNotes);
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

      state.note = tempNotes;
      storeInLocalStorage("notes", tempNotes);
    },
  },
});
export const { addNewNote, removeNote,editNote } = generalSlice.actions;
export const getAllNotes = (state) => state.generalSlice.notes;

export default generalSlice.reducer;
