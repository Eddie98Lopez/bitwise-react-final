import styled from 'styled-components'

const ImageContainer = styled.div`

background:white;
border: 1px solid rgba(0,0,0,.3);
position:relative;
overflow:hidden;
transition:all .3 ease-in-out;

&::before {
    width: 100%;
    display:block;
    content:"";
    padding-top:100%;
}

& img{

    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    width:90%;
    object-fit: cover;
}
`

export default ImageContainer