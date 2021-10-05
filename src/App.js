import ChuckNorris from "./components/ChuckNorris";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <ChuckNorris />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
