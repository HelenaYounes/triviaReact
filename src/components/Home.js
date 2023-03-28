import {useState} from 'react';

const Home = ({questions}) => {
    const [questionsList, setQuestionsList] = useState(questions);
    return (
        <div>
            {questionsList.map((question) => {
                return (
                    <p>{question.question}</p>
                );

            })}
        </div>
    );
}

export default Home;