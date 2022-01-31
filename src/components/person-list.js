import React from "react";
import styled from "styled-components";

const PersonData = styled.div`
  width: 60%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin: auto;
  border: 1px solid lightgray;
  border-bottom: 1px solid white;
`;

const Conatainer = styled.div`
  background-color: lightgray;
  width: 60%;
  margin: auto;
  border-radius: 50px;
`;

function PersonList(props) {
  return (
    <Conatainer>
      {props.items.map(person => (
        <PersonData key={person.id}>
          <h1>{person.name}</h1>
          <h1> ( {person.age} years old )</h1>
        </PersonData>
      ))}
    </Conatainer>
  );
}

export default PersonList;
