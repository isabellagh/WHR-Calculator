export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_CLIENTS":
      return action.clients
    default:
      return state
  }
}