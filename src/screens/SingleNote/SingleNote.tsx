import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllNotes } from "../../store/slices/generalSlice";
import { Note } from "../../Types";
import "./styles.scss";

const SingleNote = () => {
  const { id } = useParams();
  const notes = useSelector(getAllNotes);
  let tempNote = notes.filter((note: Note) => note.noteId === id);
  return (
    <section className="note-single-section px-4">
      <div className="note-single-title">
        <h2 className="my-2 fs-20">{tempNote[0].noteTitle}</h2>
      </div>

      <div className="py-4">
        <p>{tempNote[0].noteContent}</p>
      </div>
    </section>
  );
};

export default SingleNote;
