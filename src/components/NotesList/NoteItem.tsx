import React from "react";
import { Note } from "../../Types";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useAppDispatch } from "../../store/hooks";
import { removeNote } from "../../store/slices/generalSlice";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

type NoteItemProps = {
  note: Note;
};

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const dispatch = useAppDispatch();

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
          <button
            type="button"
            className="notes-item-btn"
            onClick={() => dispatch(removeNote(note.noteId))}
          >
            <ImCancelCircle />
          </button>
          <Link to={`/note/edit/${note.noteId}`} className="notes-item-btn">
            <FiEdit />
          </Link>
        </div>

        <Link to={`/note/${note.noteId}`} className="read-more-btn fs-14">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NoteItem;
