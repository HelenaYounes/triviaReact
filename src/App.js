import { useEffect, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import QuizContext from "./context/QuizContext";
import { quizReducer } from "./reducers/QuizReducer";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";



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
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const quizStateProvider = {
    state,
    dispatch
  }
  useEffect(()=>{
    fetchTriviaCategories();
  },[]);
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
    <QuizContext.Provider value={quizStateProvider}>
 <Routes>
      <Route
        path="/"
        element={
          <Home />
        }
      />
      {/* <Route
        path="/questions"
        element={
          <Quiz
            quizzes={state.quizzes}
            questions={state.questionsList}
            totalScore={state.totalScore}
            dispatch={dispatch}
          />
        }
      /> */}
    </Routes>
    </QuizContext.Provider>
   
  );
}

export default App;
