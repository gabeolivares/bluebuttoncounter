import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BlueButton = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": props.csrfToken,
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => setCount(data.count));
  }, [props.csrfToken]);

  const handleClick = () => {
    fetch("/count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": props.csrfToken,
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => setCount(data.count));
  };

  const handleReset = () => {
    fetch("/reset_count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": props.csrfToken,
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => setCount(data.count));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button className="modern-button" onClick={handleClick}>
        Count: {count}
      </button>
      <button className="modern-button" onClick={handleReset}>
        Reset Count
      </button>
    </div>
  );
};

BlueButton.propTypes = {
  csrfToken: PropTypes.string,
};

export default BlueButton;
