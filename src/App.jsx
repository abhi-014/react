
import React from 'react';

const App = () => {
  return (
    <> //to use multiple divs we need to use React Fragment
    <div id="parent">
      <h1 id="child1">Hello, World!</h1>
      <h2 id="child2">Welcome to my React app.</h2>
    </div>
    <div id="parent2">
      <h1 id="child3">This is another parent div.</h1>
      <h2 id="child4">It contains two child elements as well.</h2>
    </div>
    </>
    
    
  );
};

export default App;
