import React, {useEffect} from "react";
import CallToAction from "./CallToAction";
import styled from "styled-components";
import Categories from "./Categories";

function scrollFunction() {
    const nav = document.getElementsByClassName("nav")[0];
 
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      nav.className='nav nav2'
    
    } else {
     
      nav.className='nav'

    }
  }

const Nav = styled.nav`

  box-shadow: 3px 3px 3px rgba(0,0,0,.1);
  position:sticky;
  top:0;
  z-index:500;
  background:white;

  & .nav {
    transition:all .3s ease-in-out;
    height:3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding 0 5%;
    padding-top:2rem;
  }

  & .nav2{
    transition:all .3s ease-in-out;
    height:1rem;
    padding: .5rem 5%;
  }
`;

//call to action
//logo
//categories
// search

const Navigation = (props) => {
    useEffect(() => {
        window.onscroll = function () {
          scrollFunction();
        };
      }, []);
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
