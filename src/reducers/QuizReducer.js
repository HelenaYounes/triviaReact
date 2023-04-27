export const quizReducer = (state, action) => {
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