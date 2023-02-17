import { Route, Switch } from "react-router-dom";
import './App.css';

import Home from './Views/Home/Home'
import Form from './Components/Form/Form'
import Landing from './Views/Landing/Landing'
import Details from './Components/Details/Details'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/dogs' component={Home}/>
      <Route exact path='/create' component={Form}/>
      <Route exact path='/dogs/:id' component={Details}/>
    </Switch>
  );
}

export default App;
