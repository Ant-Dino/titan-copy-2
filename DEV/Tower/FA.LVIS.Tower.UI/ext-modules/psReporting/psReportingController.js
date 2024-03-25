
import React, { useState, useContext, createContext } from 'react';
// Create a context for the global state
const GlobalContext = createContext();
// A component to provide the global state
function GlobalStateProvider({ children }) {
  const [globalVar, setGlobalVar] = useState('This is a global variable');
  return (
    <GlobalContext.Provider value={{ globalVar, setGlobalVar }}>
      {children}
    </GlobalContext.Provider>
  );
}
// Custom hook to use the global state
function useGlobalState() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}
// The React component corresponding to MyController
function MyComponent() {
  const [myVar, setMyVar] = useState('Hello, World!');
  const { globalVar, setGlobalVar } = useGlobalState();
  return (
    <div>
      <p>{myVar}</p>
      <button onClick={() => setMyVar('Goodbye, World!')}>Update myVar</button>
      <p>{globalVar}</p>
      <button onClick={() => setGlobalVar('This is the new global variable')}>Update globalVar</button>
    </div>
  );
}
// Usage example, wrapped in GlobalStateProvider
function App() {
  return (
    <GlobalStateProvider>
      <MyComponent />
    </GlobalStateProvider>
  );
}
export default App;