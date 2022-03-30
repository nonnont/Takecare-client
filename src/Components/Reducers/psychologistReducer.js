export function psychologistReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN_PSYCHO":
      return action.payload;
    case "LOGOUT":
      localStorage.clear();
      return action.payload;
    default:
      return state;
  }
}
