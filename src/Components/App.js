import TodoList from "./TodoList";

function App() {
  const items = [
    {
      id: 1,
      text: "Membuang sampah",
      completed: true,
    },
    {
      id: 2,
      text: "Membuat rotu",
      completed: false,
    },
    {
      id: 3,
      text: "Belajar React",
      completed: false,
    },
  ];
  const title = "Things to do";
  return (
    <div className="container">
      <div className="row">
        <TodoList items={items} title={title} />
      </div>
    </div>
  );
}

export default App;