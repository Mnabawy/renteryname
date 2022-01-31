import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  margin: auto;
  border: 1px solid lightgray;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 50px;
`;

function PersonList(props) {
  return (
    <div>
      {props.items.map(person => (
        <Container key={person.id}>
          <h1>{person.name}</h1>
          <h1> ( {person.age} years old )</h1>
        </Container>
      ))}
    </div>
  );
}

export default PersonList;
