import "./styles.css";
import { Note } from "./Note.js";

export default function App({ notes = [] }) {
  return (
    <>
      <div><h1>Notes</h1></div>
      <div>
        {notes.map((note) => (
          <Note {...note} key={note.id} />
        ))}
      </div>
    </>
  );
}
