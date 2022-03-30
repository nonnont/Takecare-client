import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(3);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    // redirect
    count === 0 && history.push("/");
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div>
      <h1>No permission, redirect in {count}</h1>
    </div>
  );
};

export default LoadingToRedirect;
