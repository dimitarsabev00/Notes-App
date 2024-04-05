import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { parseISO, formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { Note } from "../../Types";
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
        {notes.map((note) => {
          return (
            <div className="notes-item" key={note.noteId}>
              <div className="notes-item-title">
                {note.noteTitle.substring(0, 80) + "..."}
              </div>
              <div className="notes-item-body">
                {note.noteContent.substring(0, 150) + "..."}
              </div>
              <div className="notes-item-date text-capitalize">
                {formatDistanceToNow(parseISO(note.noteDate))}
              </div>
              <div className="notes-item-btns flex align-center justify-between">
                <div>
                  <button type="button" className="notes-item-btn">
                    <ImCancelCircle />
                  </button>
                  <Link to={`/edit/${note.noteId}`} className="notes-item-btn">
                    <FiEdit />
                  </Link>
                </div>

                <Link
                  to={`/note/${note.noteId}`}
                  className="read-more-btn fs-14"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotesList;
