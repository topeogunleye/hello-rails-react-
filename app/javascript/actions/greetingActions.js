export const fetchGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://example.com/api/greeting');
      const data = await response.json();
      dispatch(setGreeting(data.message));
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };
};

export const setGreeting = (greeting) => {
  return {
    type: 'SET_GREETING',
    payload: greeting,
  };
};
