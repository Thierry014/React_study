import classes from "./addUser.module.css";
import Card from '../UI/Card'

function AddUser() {
  function addUserHandler(e) {
    e.preventDefault();
    console.log("add user ");
  }
  return (
    <Card className ={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="username" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
