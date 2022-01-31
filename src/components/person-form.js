import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid lightgray;
  width: 60%;
  margin: 20px auto;
  padding: 20px;
  background-color: bisque;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid orange;
  padding: 10px;
  border-radius: 50px;
`;

function PersonForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (name.length <= 0 || age <= 0) {
      return;
    }

    const person = {
      id: Math.random().toString(),
      name,
      age,
    };

    props.onPersonSave(person);

    setName("");
    setAge("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        name="age"
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <Button type="submit">Add Person</Button>
    </Form>
  );
}

export default PersonForm;
