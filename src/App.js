import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Services from "./pages/Services";
import navbar from './components/navbar';


function App() {
  return (
  <Router>
    <Route component={navbar}/>
      
  <div className="flex flex-row bg-gray-900 h-full"> <Route component={Main}></Route> </div>
  
  <Route component={Services}/>
 


  
  </Router>

    
  );
}

export default App;
