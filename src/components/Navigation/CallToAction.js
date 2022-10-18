import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  width: 100%;
  background: black;
  padding: 0.5rem 0;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.6rem;
  font-weight: 600;

  & span {
    font-style: italic;
    margin: 0 0.75rem;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & p {
    animation-name: fade-in;
    animation-duration: 1.5s;
  }

  @media only screen and (max-width: 564px) {
    display: none;
  }
`;

const CallToAction = (props) => {
  const taglines = [
    `Use promo code:  -SAVENOW-   for 15% off at checkout`,
    "Check out all of our HOT deals!",
    "Winter collection now available",
  ];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1 >= taglines.length ? 0 : counter + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <Wrapper>
      {taglines.map(
        (item) =>
          counter === taglines.indexOf(item) && <p>{taglines[counter]}</p>
      )}
    </Wrapper>
  );
};

export default CallToAction;
