import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../actions/greetingActions";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading greeting...</p>}
      {error && <p>Failed to load greeting: {error}</p>}
      {greeting && <p>Random greeting: {greeting}</p>}
    </div>
  );
};

export default Greeting;
