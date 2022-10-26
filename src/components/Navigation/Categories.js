import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { useMobile } from "./MobileProvider";

const Cats = styled.div`
box-sizing:border-box;
transition:all .4s ease-in-out;
height:${props=>props.display? '7rem' : '0'};
& a{
    box-sizing:border-box;
    transition: all ease-in-out .3s;
    padding: .5rem;
    text-decoration:none;
    color: black;
    text-transform: uppercase;
    font-weight:600;
    font-size: .7rem;
    border-bottom: 2px solid rgba(0,0,0,0);
    letter-spacing: 2px;


    &:hover{
        border-bottom: 2px solid rgba(0,0,0,1);
    }

}`

const categories = ["men", "women", "electronics", "jewelry"];

const Categories = (props) => {
  const {mobile} = useMobile()
  return (
    <Cats className='links' display={mobile}>
      {categories.map((item) => (
        <NavLink to="/">{item}</NavLink>
      ))}
    </Cats>
  );
};

export default Categories;
