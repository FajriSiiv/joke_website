import ChuckNorris from "./components/ChuckNorris";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tailwindcss/tailwind.css";
function App() {
  return (
    <Router>
      <div className="App max-w-full h-fit-content">
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
