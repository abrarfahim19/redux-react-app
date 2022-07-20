// import Counter from './components/Counter';
// import Todo from './components/Todo';
import './App.css'
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    <div>
      {/* <Counter></Counter>
      <Todo></Todo> */}
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
