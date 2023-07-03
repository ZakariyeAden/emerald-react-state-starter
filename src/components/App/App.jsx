import { useState } from "react";
import Clicker from "../Clicker/Clicker";


function App() {
  const [color, setColor] = useState('red');
  return (
    <>
        <Clicker color={color} setColor={setColor}/>
        <Clicker/>
        <Clicker/>
    </>
  );
}

export default App;
