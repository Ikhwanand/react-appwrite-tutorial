import { useState } from "react";
import db from "../appWrite/databases";
import DeleteIcon from "../assets/DeleteIcon";

const Note = ({ setNotes,  noteData }) => {
  const [note, setNote] = useState(noteData);

  const handleUpdate = async () => {
    const completed = !note.completed;
    db.notes.update(note.$id, { completed });
    setNote({ ...note, completed: completed });
  };

  const handleDelete = async () => {
    db.notes.delete(note.$id); // delete note from database
    setNote((prevState) => prevState.filter((i) => i.$id !== note.$id));
  }

  return (
    <div className="note-wrapper">
      <span onClick={handleUpdate}>
        {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
      </span>

      <div onClick={handleDelete} className="delete">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
