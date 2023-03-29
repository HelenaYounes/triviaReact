import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";



const Home = ({ list, state, dispatch, fetchQuestionsList }) => {
  const navigate = useNavigate();
  
  const fetchQuestions = async (category) => {
    const res = await fetch(
      `https://the-trivia-api.com/api/questions?limit=3&categories=${category}`
    );
    const json = await res.json();
   
    dispatch({
      type: 'getQuestionsList',
      payload: {questionsList: json}
    });
    navigate("/questions");
  };

  return (
    <div>
      <Header score={state.totalScore} />
      <Categories menu={list} onPickCategory={fetchQuestions} />
    </div>
  );
};

export default Home;
