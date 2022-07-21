// import Counter from './components/Counter';
// import Todo from './components/Todo';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CounterView from "./features/counter/CounterView";
import CrudView from "./features/crud/CrudView";
import EditCrud from "./features/crud/EditCrud";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<CounterView />}></Route>
        <Route path="/posts" element={<PostsView />}></Route>
        <Route path="/crud" element={<CrudView />}></Route>
        <Route path="/edit-book" element={<EditCrud />}></Route>
      </Routes>
    </div>
  );
}

export default App;
