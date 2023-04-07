import { useEffect, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "updateQuizzes":
      return { ...state, quizzes: action.payload.quizzes };
    case "increaseTotalScore":
      return { ...state, totalScore: action.payload.totalScore };
    case "getQuestionsList":
      return { ...state, questionsList: action.payload.questionsList };
    case "getCategoriesList":
      return { ...state, categoriesList: action.payload.categoriesList };
    case "getCategory":
      return { ...state, category: action.payload.category };
    default:
      return state;
  }
};

const initialState = {
  categoriesList: [],
  totalScore: 0,
  category: "",
  questionsList: {
    questions: {},
  },
  quizzes: JSON.parse(localStorage.getItem("quizzes")) || [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.clear();
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

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Home list={state.categoriesList} state={state} dispatch={dispatch} />
        }
      />
      <Route
        path="/questions"
        element={
          <Quiz
            quizzes={state.quizzes}
            questions={state.questionsList}
            totalScore={state.totalScore}
            dispatch={dispatch}
          />
        }
      />
    </Routes>
  );
}

export default App;
