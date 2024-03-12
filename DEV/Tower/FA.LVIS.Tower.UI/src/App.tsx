import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
import './App.css'; // Assuming you have some global styles similar to those from the AngularJS application

// Define the main App component
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/help" component={Help} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

// Entry point for React application, simulating the AngularJS index.html structure
ReactDOM.render(<App />, document.getElementById('root'));