import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Questions from './Questions';

const Home = ({list}) => {
    const [categoriesList, setCategoriesList] = useState(list);
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async (category) => {
        const res = await fetch(`https://the-trivia-api.com/api/questions?limit=3&categories=${category}`)
        const json = await res.json();
        setQuestions(json);
        console.log(json)
        navigate("/questions", {
            state: {
                questions: json
            }
        })
    };
 
  return (
        <div>
            <h1>Welcome To trivia Game</h1>
            <Header menu={list} onPickCategory={fetchQuestions}/>
        </div>
    );
}

export default Home;