import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';


function App() {
  const [trivia, setTrivia] = useState();

  const fetchTrivia = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=11');
    const json = await response.json();
    setTrivia(json.results);
    console.log(json.results);
  }

  useEffect(()=>{
    fetchTrivia();
  },[]);

  return (
    <Routes>
      <Route path='/' element={<Home questions={trivia}/>}/>
    </Routes>
  );
}

export default App;
