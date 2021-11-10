import "./styles.css";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];

export default function App() {
  if (typeof notes === "undefined" || notes.length === 0) {
    return "No hay notas que mostrar.";
  } else {
    return (
      <div>
        {notes.map((note) => {
          return (
            <div>
              <p>
                {note.content}
                <small>
                  <time>{note.date}</time>
                </small>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}