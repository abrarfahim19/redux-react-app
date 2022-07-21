// import Counter from './components/Counter';
// import Todo from './components/Todo';
import './App.css'
import CheckGithubView from './features/checkGithub/CheckGithubView';
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    <div>
      {/* <Counter></Counter>
      <Todo></Todo> */}
      <CheckGithubView/>
      <CounterView/>
      <PostsView/>
    </div>
  );
}

export default App;
