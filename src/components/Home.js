import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CreateQuiz from "./CreateQuiz";

const Home = ({ list, state, dispatch }) => {
  const navigate = useNavigate();

  const fetchQuestions = async ({ category, difficulty, limit }) => {
    const res = await fetch(
      `https://the-trivia-api.com/api/questions?limit=${limit}&categories=${category}&difficulty=${difficulty}`
    );
    const json = await res.json();
    dispatch({
      type: "getQuestionsList",
      payload: { questionsList: json },
    });
    navigate("/questions");
  };

  return (
    <div>
      <Header score={state.totalScore} />
      <CreateQuiz categoriesList={list} onPickCategory={fetchQuestions} />
    </div>
  );
};

export default Home;
