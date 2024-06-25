import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import SignedIn from './page/SignedIn';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path='/signedin' element={<SignedIn/>} />
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;