import { createContext, useContext } from "react";

const QuizContext = createContext(null);
export function useQuizContext() {
  return useContext(QuizContext);
}

export default QuizContext;
