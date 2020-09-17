import React, { useState } from 'react';
import './App.css';
import Box from './components/box'
import Input from './components/input'

// Pull in data and explain it using State.
// Empty Array filled with colors. (Strings) ["Blue", "Yellow"]
// iterate using .map function
// Create box component that uses individual color item as a prop. 
// 
function App() {
  const [box, setBox] = useState({
    colors: [],
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="display">Box Generator</h1>
        <Input setBox={setBox} box={box} />
        <div className="row">
          {box.colors.map((color) => (
            <Box color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
