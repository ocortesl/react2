import Index from "./pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import './styles/styles.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route> 
          <Route path='/'>
            <Index></Index>
          </Route>
        </Switch>
      </Router>
    

    </div>
  );
}

export default App;
