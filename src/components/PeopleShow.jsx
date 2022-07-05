import Person from "./Person";
import { people } from "../data/people";
import { useState } from "react";
import AddForm from "./AddUserForm";
export default function PeopleShow() {
  const [peopleData, setPeopleData] = useState(people);
  const [person, setPerson] =useState({name: "",age: 0})
  
  const deleteHandler = (id) => {
    setPeopleData(
      peopleData.filter((person) => {
        return person.id !== id;
      })
    );
  };
  const changeHandler = (e)=>{
    setPerson({...person, [e.target.name]: e.target.value})
    console.log(person);
  }
  const submitHandler = (e) => {
    const newPerson ={...person, id: peopleData.length+1}
    e.preventDefault();
    setPeopleData([...peopleData, newPerson]);
    setPerson({...person, personName:"" });
  };
  return (
    <>
      {peopleData.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            gender={person.gender}
            age={person.age}
            onDelete={() => deleteHandler(person.id)}
          />
        );
      })}
      <AddForm onChanging={changeHandler}  onAdd={submitHandler} />
    </>
  );
}
