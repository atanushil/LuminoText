import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <div className="App">
      <NavBar/>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <h1>To Do List for {formatDate(today)}</h1>
    </div>
  );
}

export default App;
