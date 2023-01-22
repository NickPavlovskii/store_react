

import './App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Page/header/Header';





function App() {
 


  
    
    return (
    <div>  
    
    

    <Router>
  
    <Routes>
        <Route exact path='/'  element={<Home />} />
      
        
    </Routes>
    </Router>
      
    
    
    


    </div>
    
    )
}

export default App;
