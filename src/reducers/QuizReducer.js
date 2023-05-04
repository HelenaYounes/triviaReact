export const quizReducer = (state, action) => {
  switch (action.type) {
    case "updateQuizzes":
      return { ...state, quizzes: action.payload.quizzes };
    case "increaseTotalScore":
      return { ...state, totalScore: action.payload.totalScore };
    case "createQuiz":
      return { ...state, newQuiz: action.payload.newQuiz };
    case "getCategoriesList":
      return { ...state, categoriesList: action.payload.categoriesList };
    default:
      return state;
  }
};
