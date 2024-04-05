import { ChangeEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { editNote, getAllNotes } from "../../store/slices/generalSlice";
import { Note } from "../../Types";
import "./styles.scss";

const EditNoteForm = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notes = useAppSelector(getAllNotes);
  let tempNote = notes.filter((note: Note) => note.noteId === id);

  const [formData, setFormData] = useState(tempNote[0]);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [canSave, setCanSave] = useState(true);

  const onFormDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    if (event.target.name === "noteTitle") {
      if (event.target.value.length === 0) {
        setTitleError(true);
      } else {
        setTitleError(false);
        setCanSave(true);
      }
    }

    if (event.target.name === "noteContent") {
      if (event.target.value.length === 0) {
        setContentError(true);
      } else {
        setContentError(false);
        setCanSave(true);
      }
    }

    setFormData((prevData: any) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSaveNoteClicked = () => {
    if (!titleError && !contentError) {
      console.log(formData);
      dispatch(editNote(formData));
      toast("Note edited successfully");
      setFormData({ noteTitle: "", noteContent: "" });
      navigate(-1);
    }
  };

  return (
    <div>
      <section className="note-form-section">
        <h2 className="my-4 fs-16">Edit Note</h2>
        <form className="note-form">
          <div className="form-element">
            <label htmlFor="noteTitle" className="form-label">
              Title:
            </label>
            <input
              type="text"
              id="noteTitle"
              name="noteTitle"
              placeholder="Note title here ..."
              onChange={onFormDataChange}
              className="form-control"
              value={formData.noteTitle}
            />
            <span className="form-error-text">
              {titleError ? "Title can't be empty!" : ""}
            </span>
          </div>

          <div className="form-element">
            <label htmlFor="noteContent" className="form-label">
              Content:
            </label>
            <textarea
              id="noteContent"
              name="noteContent"
              placeholder="Note content here ..."
              onChange={onFormDataChange}
              className="form-control"
              rows={10}
              value={formData.noteContent}
            ></textarea>
            <span className="form-error-text">
              {contentError ? "Content can't be empty!" : ""}
            </span>
          </div>

          <button
            type="button"
            onClick={onSaveNoteClicked}
            className="btn btn-default"
            disabled={!canSave}
          >
            Save Note
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditNoteForm;
