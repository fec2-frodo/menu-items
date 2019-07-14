import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
@media screen and (min-width: 1061px){
    width: calc(50% - 17.5px);
    margin: 16px 0;
    padding: 0;
    border: 1px solid rgba(217,219,224,0.5);
    height: 128px;
}
  &:hover {background-color:#F7F7F8};
  font-family: Calibri, "Helvetica", san-serif;
`
const Body = styled.div`

`
const Item = ({ item, handleItemClick }) => (
  <>
    <Container className ="singleItem" id ={item._id} onClick={handleItemClick}>
    <Body>
      <div className ="itemName">{item.name}</div>
      <div className ="itemDescription">{item.description}</div>
      <div className= "itemPrice">{item.price}</div>
      </Body>
    </Container>
  </>
);
export default Item;
