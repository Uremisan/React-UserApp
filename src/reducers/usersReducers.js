const initialState = {
  users: [{name: "John Doe", userID:"12345", gender:"male"}]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_USER":

        break;

      default:
        return state;
  }
};

export default usersReducer;