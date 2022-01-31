import PersonForm from "./components/person-form";
import PersonList from "./components/person-list";

import "./App.css";
import { useState } from "react";

const DUMMY_DATA = [
  { id: "p1", name: "mohamed", age: 27 },
  { id: "p2", name: "ahmed", age: 22 },
];

function App() {
  const [persons, setPersons] = useState(DUMMY_DATA);

  const onPersonSave = data => {
    const newList = [...persons, data];
    setPersons(newList);
  };

  return (
    <div className="App">
      <PersonForm onPersonSave={onPersonSave} />
      <PersonList items={persons} />
    </div>
  );
}

export default App;
