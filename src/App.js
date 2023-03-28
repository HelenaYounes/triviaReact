import {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  const [triviaCategories, setTriviaCategories] = useState([]);

  useEffect(()=>{
    fetchTrivia();
  },[]);

  const fetchTrivia = async () => {
    const response = await fetch('https://the-trivia-api.com/api/categories');
    const json = await response.json();
    const list = Object.keys(json);
    const categories = [];
    list.forEach(category => categories.push(json[category][0]));
    setTriviaCategories(categories);
  };


  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home list= {triviaCategories}/>}/>
      <Route path='/questions' element={<Questions />} />
    </Routes>
  );
}

export default App;
