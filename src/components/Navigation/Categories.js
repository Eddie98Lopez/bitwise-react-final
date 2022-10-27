import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMobile } from "./MobileProvider";
import categories from "../../utils/categories";
const Cats = styled.div`
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;

  
  & a {
    box-sizing: border-box;
    transition: all ease-in-out 0.3s;
    padding: 0.5rem;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.7rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    letter-spacing: 2px;

    @media only screen and (max-width:768px){
      padding:1rem;

    }
    &:hover {
      border-bottom: 2px solid rgba(0, 0, 0, 1);
    }
  }

@media only screen and (max-width:768px){
  height: ${(props) => (props.display === "true" ? "25vh" : "0")};
}
`;



const Categories = (props) => {
  const { mobile } = useMobile();
  return (
    <Cats className="links" display={mobile.toString()}>
      {categories.map((item) => (
        <NavLink to={`/category/${item.path}`} key={item.id}>
          {item.path}
        </NavLink>
      ))}
    </Cats>
  );
};

export default Categories;
