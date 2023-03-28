import {useState} from 'react';
import Header from './Header';
import Questions from './Questions';

const Home = ({list}) => {
    const [categoriesList, setCategoriesList] = useState(list);
    const [questions, setQuestions] = useState([{
        category: "Science",
        id: "622a1c3e7cc59eab6f952224",
        correctAnswer: "Polio",
        incorrectAnswers: [
        "Syphilis",
        "Mumps",
        "Smallpox"
        ],
        question: "As what is infantile paralysis more commonly known?",
        tags: [
        "science",
        "medicine",
        "biology"
        ],
        type: "Multiple Choice",
        difficulty: "medium",
        regions: [ ],
        isNiche: false
        }]);

    const fetchQuestions = async (category) => {
        const res = await fetch(`https://the-trivia-api.com/api/questions?limit=3&categories=${category}`)
        const json = await res.json();
        setQuestions(json);
        console.log(json);
    };

    const handlePickCategory = (value) => {
        fetchQuestions(value);
    };
 
  return (
        <div>
            <h1>Welcome To trivia Game</h1>
            <Header menu={list} onPickCategory={handlePickCategory}/>
            <Questions questions={questions} />
        </div>
    );
}

export default Home;