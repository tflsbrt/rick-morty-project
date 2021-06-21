import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Main";
import NotFoundPage from "./views/NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
