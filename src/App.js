import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'



function App() {
  const [triviaCategories, setTriviaCategories] = useState([]);
  const categories = [];

  useEffect(()=>{
    fetchTrivia();
  },[]);

  const fetchTrivia = async () => {
    const response = await fetch('https://the-trivia-api.com/api/categories');
    const json = await response.json();
    const list = Object.keys(json);
    list.forEach(category => categories.push(json[category]));
    setTriviaCategories(categories);
  };


  return (
   <Home list={triviaCategories} />
  );
}

export default App;
