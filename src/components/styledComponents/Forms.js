import styled from 'styled-components'

const Input = styled.input`
width:100%;
transition:all .3s ease-in-out;
box-sizing:border-box;
padding: .75rem;
outline:none;
border: solid 2px rgba(0,0,0,0);
background:rgba(0,0,0,.02);

&::placeholder{
    opacity:.2
}

&:focus{
    border-bottom: solid 2px rgba(0,0,0,1);
    background:rgba(0,0,0,.05); 
}

@media only screen and (max-width:768px){
    font-size:1.25rem;
    
}
`

const Label = styled.label`
display:block;
text-align: left;
color: grey;
font-size: .7rem;
text-transform: uppercase;
font-weight: 600;
letter-spacing:2px;
margin-bottom: .25rem;

`
const Form = styled.form`
box-sizing:border-box;
padding: 2rem;
width: 100%;
background: white;

& fieldset{
    box-sizing:border-box;
    padding:1rem .5rem;
    border-bottom: solid lightgrey 2px;
    margin-bottom:1rem;
    & legend{
        text-align:left;
        text-transform: uppercase;
        letter-spacing:2px;
        font-size: .8rem;
        font-weight:600;
    }

}

& .checkbox{
    display:flex;
    align-items:center;
    color:grey;
    text-align:left;
    font-size: .8rem;
    margin-bottom: 1rem;
}

& .errors{
    color:crimson;
    text-align:left;
    font-size: .8rem;
}

& .double{
    box-sizing:border-box;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
}

& .triple {
    box-sizing:border-box;
    display:grid;
    grid-template-columns: 3fr 1fr 1fr;
    gap:1rem;
    margin-bottom:1rem;

    @media only screen and (max-width:768px){
        grid-template-columns: 1fr 1fr;
        & :nth-child(1){
            grid-column:1/3;
        }
    }
}

@media only screen and (max-width:768px){
    padding:2rem 1rem;
}
`

export {Input, Label, Form}