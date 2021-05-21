import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import { FooterContainer } from "./components/containers/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
      <FooterContainer></FooterContainer>
    </Router>
  );
}

export default App;
