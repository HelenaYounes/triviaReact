import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import Header from "./Header";
import Modal from "./Modal";
import Account from "./Account";
import { CButton } from "@coreui/react";



const Home = (props) => {
  const { state, dispatch } = useQuizContext();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    fetchTriviaCategories();
  }, []);

  const fetchTriviaCategories = () => {
    const listCategories = [];
    Object.values(state.categories).forEach((cat) => {
      cat.map((el) => listCategories.push(el)); 
    });
    dispatch({
      type: "getCategoriesList",
      payload: { categoriesList: listCategories },
    });
  };

  const navigate = useNavigate();

  const fetchQuestions = async ({ category, difficulty, limit }) => {
    const res = await fetch(
      `https://the-trivia-api.com/api/questions?limit=${limit}&categories=${category}&difficulty=${difficulty}`
    );
    const json = await res.json();
    const questions = json.map((el) => {
      return {
        question: el.question,
        answer: el.correctAnswer,
        choices: [...el.incorrectAnswers, el.correctAnswer].sort(),
        id: el.id,
      };
    });
    const newQuiz = {
      category,
      questions,
      difficulty,
      limit: json.length,
    };
    dispatch({
      type: "createQuiz",
      payload: { newQuiz },
    });
    navigate("questions");
  };

  return (
    <>
      <Header text="Welcome To Trivia Game" />
      <Account quizzes={state.quizzes} />
      <CButton onClick={() => setVisible(!visible)}>Create New Quiz</CButton>
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        categoriesList={state.categoriesList}
        onPickCategory={fetchQuestions}
      />
    </>
  );
};

export default Home;
