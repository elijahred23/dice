import './App.css';
import Die from './Die.js';

function App() {
  return (
    <div className="App">
      <Die rolling={true} face="one"/>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
