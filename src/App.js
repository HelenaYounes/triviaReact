import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
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
    dispatch,
  };

  return (
    <QuizContext.Provider value={quizStateProvider}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="questions"
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
    </QuizContext.Provider>
  );
}

export default App;
