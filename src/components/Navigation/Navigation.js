import React from "react";
import CallToAction from "./CallToAction";
import styled from "styled-components";
import Categories from "./Categories";

const Nav = styled.nav`

  box-shadow: 3px 3px 3px rgba(0,0,0,.1);
  position:sticky;
  top:0;
  z-index:500;
  background:white;

  & .nav {
    height:3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding 0 5%;
    padding-top:2rem;
    
  }
`;

//call to action
//logo
//categories
// search

const Navigation = (props) => {
  return (
    <Nav>
      <CallToAction />
      <div className='nav'>
        <div>logo</div>
        <Categories/>
        <div>search stuff</div>
      </div>
    </Nav>
  );
};

export default Navigation;
