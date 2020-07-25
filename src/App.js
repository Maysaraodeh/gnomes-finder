import React from 'react';
import MainLayout from 'layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/Errors';
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
