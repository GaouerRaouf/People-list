import "../../node_modules/bootstrap/dist/css/bootstrap.css"
function Person({ name, age, gender,onDelete }) {
  return (
    <div className="col-md-4" style={gender==="male"? {backgroundColor:"blue", border:"1px solid black"}:{backgroundColor:"pink", border:"1px solid black"}} >
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{gender} </h2>
      <button onClick={onDelete} className="btn btn-danger">Delete</button>
    </div>
  );
}
export default Person;
