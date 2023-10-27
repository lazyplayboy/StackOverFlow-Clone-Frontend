import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { fetchAllQuestions } from './Actions/Question';
import Root from './Root';
import { fetchAllUsers } from './Actions/Users';



function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
      <Navbar/>
     <Root/>
     
      </Router>
     
    </div>
  );
}

export default App;