import React, { useState } from 'react';

const App = () => {
 const [greeting, setGreeting] = useState('Hello, World!');

 const sayHello = () => {
   alert('Hello!');
 };
  
 return (
   <div>
     <p>{greeting}</p>
     <button onClick={sayHello}>Say Hello</button>
   </div>
 );
};

export default App;