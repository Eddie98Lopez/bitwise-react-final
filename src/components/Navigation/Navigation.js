import React, {useEffect} from "react";
import CallToAction from "./CallToAction";
import styled from "styled-components";
import Categories from "./Categories";
import CountIcons from "./CountIcons";
import MobileProvider from "./MobileProvider";
import { useNavigate, Link} from "react-router-dom";


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
    padding: .75rem 5% .5rem 5%;
  }

  @media only screen and (max-width:768px){
    & .nav2{height:auto;
    padding: .85rem 2.5%;}
    & .nav{
      padding: .85rem 2.5%;
      height:auto;
      display: grid;
      grid-template-areas: 
      "logo icons"
      "l l";

      & .logo{
        grid-area:logo;
      }
      & .links{
        grid-area:l;
        display:flex;
        flex-direction:column;
        overflow:hidden;
      }
      & .counts{
        grid-area:icons;
      }
    }
  }
`;

//call to action
//logo
//categories
//search

const Navigation = (props) => {
  const navigate = useNavigate()
   
    useEffect(() => {
        window.onscroll = function () {
          scrollFunction();
        };
      }, []);
  return (
    <MobileProvider>
    <Nav>
      <CallToAction />
      <div className='nav'>
        <div className='logo'><Link to='/'>logo</Link></div>
        <Categories/>
        <CountIcons/>

      </div>
    </Nav>
    </MobileProvider>
  );
};

export default Navigation;
