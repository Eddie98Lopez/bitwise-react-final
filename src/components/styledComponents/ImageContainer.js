import styled from 'styled-components'

const ImageContainer = styled.div`


position:relative;
transition:all .3 ease-in-out;

&::before{
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

    width:${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    object-fit: ${props => props.objectFit || 'cover'};
}`

export default ImageContainer