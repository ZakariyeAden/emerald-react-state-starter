// Object destructuring. our import is equilvalent to these two lines
import { useState } from "react";


function Clicker() {
  // State is variable data that can be displayed in DOM!
  // using hooks from React. Using component lifestyle feature

  // useState is function and we'll pass in whatever we want the intial
  // Example: [ CurrentStateValue, functiontoUpdateTheStateValue]
  const [name, setName] = useState("Zakariye");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Tells react that were making changes
    // React needs to know when state changes so it can update the DOM  
    setCount(count + 1);
    console.log("Clicked");
    // Do some other stuff...
  };
  return (
    <div>
      <p>Hello! My name is {name}.</p>
      <button onClick={handleClick}>Click me!</button>
      <p>I've clicked the button {count} times.</p>
    </div>
  );
}

export default Clicker;