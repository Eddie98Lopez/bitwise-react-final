import React from "react";
import styled from "styled-components";



const Wrapper = styled.div`
width:${props=>props.width ?props.width : '25px'};
height:${props=>props.height ?props.height : '25px'};

& div{
    position:relative;
    
    & div{
        width:100%;
        height:3px;
        background:${props=>props.color ?props.color : 'black'};
    }
};

& #rect1 {
    position:absolute;
    transform:rotate(135deg);
    top:0;
};
& #rect2 {
    transform:rotate(-135deg);
    position:absolute;
    top:0;
}


`;

const CloseButton = (props) => {

  return (
    <Wrapper
{...props}
    >
    <div>
      <div id="rect1" />
      <div id="rect2" />
      </div>
 
     
    </Wrapper>
  );
};

export default CloseButton;