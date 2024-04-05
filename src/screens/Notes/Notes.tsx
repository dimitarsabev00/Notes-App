import { getAllNotes } from "../../store/slices/generalSlice";
import { useAppSelector } from "../../store/hooks";
import { NotesList } from "../../components";

const Notes = () => {
  const notes = useAppSelector(getAllNotes);
  return (
    <NotesList notes = {notes} />
  )
};

export default Notes;
