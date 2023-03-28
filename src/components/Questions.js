import { useLocation } from "react-router-dom";

const Questions = () => {
    const location = useLocation();
    const questionsList = location.state.questions;
    return (
        <ul>
            {questionsList.map(question => <li>{question.question}</li>)}
        </ul>
    )
}

export default Questions;