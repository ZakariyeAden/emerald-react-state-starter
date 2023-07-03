// Object destructuring. our import is equilvalent to these two lines
import { useState } from "react";
import "./App.css";

function App() {
  // State is variable data that can be displayed in DOM!
  // using hooks from React. Using component lifestyle feature

  // useState is function and we'll pass in whatever we want the intial
  // Example: [ CurrentStateValue, functiontoUpdateTheStateValue]
  const [name, setName] = useState("Zakariye");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Clicked");
    // Do some other stuff...
  };
  return (
    <div className="App">
      <p>Hello! My name is {name}.</p>
      <button onClick={handleClick}>Click me!</button>
      <p>I've clicked the button {count} times.</p>
    </div>
  );
}

export default App;
