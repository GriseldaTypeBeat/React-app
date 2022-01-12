import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Policy from './Components/Policy';
import Error from './Components/Error';

function App() {
  return (
    <>
<Router>
  <Routes>
    <Route exact path = "/" element={<Home />}/>
    <Route path = "/About" element={<About />}/>
    <Route path = "/Services" element={<Services />}/>
    <Route path = "/Contact" element={<Contact />}/>
    <Route path = "/Policy" element={<Policy />}/>
    <Route path= "*" element={<Error />}/>
  </Routes>
</Router>
</> );
}

export default App;


    


