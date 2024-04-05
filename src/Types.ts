export interface Note {
    noteId: string;
    noteTitle: string;
    noteContent: string;
    noteDate: string;
  }
  
  export interface GeneralSliceInitialState {
    notes: Note[];
  }