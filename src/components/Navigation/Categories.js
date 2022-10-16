import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Cats = styled.div`
& a{
    transition: all ease-in-out .3s;
    padding: .5rem;
    text-decoration:none;
    color: black;
    text-transform: uppercase;
    font-weight:600;
    font-size: .9rem;
    border-bottom: 2px solid rgba(0,0,0,0);

    &:hover{
        border-bottom: 2px solid rgba(0,0,0,1);
    }

}`

const categories = ["men", "women", "electronics", "jewelry"];

const Categories = (props) => {
  return (
    <Cats>
      {categories.map((item) => (
        <NavLink to="/">{item}</NavLink>
      ))}
    </Cats>
  );
};

export default Categories;