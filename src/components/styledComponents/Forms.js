import styled from 'styled-components'

const Input = styled.input`
width:100%;
transition:all .3s ease-in-out;
box-sizing:border-box;
padding: .75rem;
outline:none;
border: solid 2px rgba(0,0,0,0);
background:rgba(0,0,0,.02);

&:focus{
    border-bottom: solid 2px rgba(0,0,0,1);
}
`

const Label = styled.label`
display:block;
text-align: left;
color: lightgrey;
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
    grid-template-columns: 4fr 1fr;
    gap:1rem;

}
`

export {Input, Label, Form}