import styled from 'styled-components'

const ProductGrid = styled.div`
  display: grid;
  width: 75%;
  margin: auto;
  margin: 3rem auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media only screen and (max-width:768px){
    grid-template-columns: repeat(2, 1fr);
    width:90%;
  }
`;

export default ProductGrid