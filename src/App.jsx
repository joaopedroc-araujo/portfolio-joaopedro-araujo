
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Header />
          </>
        )}
      />
    </Switch>
  );
}

export default App
