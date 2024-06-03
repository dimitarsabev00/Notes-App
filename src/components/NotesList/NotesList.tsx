import React from "react";
import { Note } from "../../Types";
import NoteItem from "./NoteItem";

import "./styles.scss";

type NotesListProps = {
  notes: Note[];
};
const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  if (!notes || notes.length === 0) {
    return <div className="not-found">No any notes found</div>;
  }

  return (
    <div className="notes">
      <h5 className="fs-18 fw-8 text-uppercase notes-title">notes</h5>
      <div className="notes-list grid">
        {notes.map((note) => (
          <NoteItem key={note.noteId} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
