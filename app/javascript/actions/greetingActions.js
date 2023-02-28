// Define the initial state of the store
const initialState = {
  greeting: "",
  loading: false,
  error: null
};

// Define the action types
const FETCH_GREETING_REQUEST = "FETCH_GREETING_REQUEST";
const FETCH_GREETING_SUCCESS = "FETCH_GREETING_SUCCESS";
const FETCH_GREETING_FAILURE = "FETCH_GREETING_FAILURE";

// Define the action creator that will fetch the greeting
const fetchGreeting = () => async (dispatch) => {
  dispatch({ type: FETCH_GREETING_REQUEST });

  try {
    const response = await fetch("https://example.com/api/greeting");
    const data = await response.json();

    dispatch({ type: FETCH_GREETING_SUCCESS, payload: data.greeting });
  } catch (error) {
    dispatch({ type: FETCH_GREETING_FAILURE, payload: error.message });
  }
};

// Define the reducer that will handle the state changes
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
        loading: false,
        error: null
      };

    case FETCH_GREETING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(greetingReducer, applyMiddleware(thunk));