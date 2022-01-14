import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Policy from './Components/Policy';
import Error from './Components/Error';
import List from './Components/List';

function App() {
  return (
    <>
    
<Router>
<List />
  <Routes>
    <Route exact path = "/" element={<Home />}/>
    <Route path = "/about" element={<About />}/>
    <Route path = "/services" element={<Services />}/>
    <Route path = "/contact" element={<Contact />}/>
    <Route path = "/policy" element={<Policy />}/>
    <Route path= "*" element={<Error />}/>
  </Routes>
</Router>
</> );
}

export default App;


    


