import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import Header from "./Header";
// import CreateQuiz from "./CreateQuiz";
import Modal from "./Modal";
import { CButton } from "@coreui/react";

const Home = (props) => {
  const { state, dispatch } = useQuizContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchTriviaCategories();
  }, []);

  const fetchTriviaCategories = async () => {
    const response = await fetch("https://the-trivia-api.com/api/categories");
    const json = await response.json();
    const listCategories = [];
    Object.values(json).forEach((cat) => {
      cat.map((el) => listCategories.push(el));
    });
    dispatch({
      type: "getCategoriesList",
      payload: { categoriesList: listCategories },
    });
  };
  useEffect(() => {
    localStorage.clear();
    let quizzesList = JSON.stringify(state.quizzes);
    localStorage.setItem("quizzes", quizzesList);
  }, [state.quizzes]);

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
    navigate("questions");
  };

  return (
    <>
      <Header score={state.totalScore} text="Welcome To Trivia Game" />
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
