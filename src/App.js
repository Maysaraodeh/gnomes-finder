import React from 'react';
import MainLayout from 'layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
