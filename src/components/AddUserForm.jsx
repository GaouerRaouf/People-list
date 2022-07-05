import { useState } from "react";
import { people } from "../data/people";
export default function AddForm({onAdd, onChanging}) {
   
  return (
    <form className="col-md-4" style={{border:"1px solid black", textAlign:"left"}}>
      <input
        type="text"
        name="name"
        onChange={onChanging}
        id=""
      />
      <input
        type="number"
        name="age"
        
        onChange={onChanging}
        id=""
      />
        <label htmlFor="male">male</label>
      <input
        type="radio"
        style={{ display: "inline" }}
        name="gender"
        value="male"
        onChange={onChanging}
        id=""
      />
        <label htmlFor="gender">female</label>
      <input
        type="radio"
        name="gender"
        style={{ display: "inline" }}
        value="female"
        onChange={onChanging}
        id=""
      />{" "}
      <button type="submit" className="btn btn-success" onClick={onAdd}>
        Add
      </button>
    </form>
  );
}
