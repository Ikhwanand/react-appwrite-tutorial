import db from "../appWrite/databases";


const NoteForm = ({ setNotes }) => {

    const handleAdd = async (e) => {
        e.preventDefault();
        const noteBody = e.target.body.value;

        if (noteBody === "") return;

        try {

            const payload = { body: noteBody }
            const response = await db.notes.create(payload);
            setNotes((prevState) => [response, ...prevState]);
            
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <form onSubmit={handleAdd} id="todo-form">
        <input type="text"
        name="body"
        placeholder="🤔 What's on the agenda?" />
    </form>
  )
}

export default NoteForm