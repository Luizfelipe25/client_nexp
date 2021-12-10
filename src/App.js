import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Services1 from "./components/pages/Services1";
import Servicesxml from "./components/pages/Servicesxml";
import Login from "./components/pages/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import { FooterContainer } from "./components/containers/footer";
import { GlobalStyle } from "./components/ModalStyles";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/Services1" component={Services1} />
        <Route path="/Servicesxml" component={Servicesxml} />
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
      <FooterContainer></FooterContainer>
    </Router>
  );
}

export default App;
