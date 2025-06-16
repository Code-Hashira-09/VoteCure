import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";
import Admin from "./layouts/Admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;