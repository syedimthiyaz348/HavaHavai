import {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Airport from './components/Airport';
import Home from './components/Home';
import ServiceForm from './components/ServiceForm';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/airport' Component={Airport}/>
          <Route exact path='/airport/:name' Component={ServiceForm}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
