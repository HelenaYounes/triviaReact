import { useState, useEffect, useReducer } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Questions from "./components/Questions";
import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 'addScore':
      return {...state, totalScore: action.totalScore};
    case 'getQuestionsList':
      return {...state, questionsList: action.payload.questionsList}
    case 'getCategoriesList':
        return {...state, categoriesList: action.payload.categoriesList}
    case 'getCategory':
      return {...state, category: action.payload.category}
    default:
      return state;  
  }
};

const initialState = {
  categoriesList: [],
  totalScore: 0,
  category: '',
  questionsList: {
    questions: {}
  }
};


function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState );

  useEffect(() => {
    fetchTriviaCategories();
  }, []);

  // useEffect(() => {
  //   fetchTrivia();
  // }, []);

  const fetchTriviaCategories = async () => {
    const response = await fetch("https://the-trivia-api.com/api/categories");
    const json = await response.json();
    const list = Object.keys(json);
    const categories = [];
    list.forEach((category) => categories.push(json[category][0]));
    dispatch({
      type: 'getCategoriesList',
      payload: {categoriesList: categories}
    });
  };

  // const fetchQuestions = async (category) => {
  //   const res = await fetch(
  //     `https://the-trivia-api.com/api/questions?limit=3&categories=${category}`
  //   );
  //   const json = await res.json();
   
  //   dispatch({
  //     type: 'getQuestionsList',
  //     payload: {questionsList: json}
  //   });
  //   navigate("/questions");
  // };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home list={state.categoriesList} state={state}  dispatch={dispatch} />} />
      <Route path="/questions" element={<Questions questions={state.questionsList} totalScore={state.totalScore} dispatch={dispatch} />} />
    </Routes>
  );
}

export default App;
