import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


// Define API URL
const API_ENDPOINT = process.env.REACT_APP_PROXY;


// Creates the releases table
function Users() {

   // Setting variables and state
   const navigate = useNavigate();
   const [users, setUsers] = useState([]);
   const [userID, setUserID] = useState("");
   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");

   // Function to retrieve genres
   const loadUsers = async () => {
       const response = await fetch(`${API_ENDPOINT}/api/users`);
       const data = await response.json();
       setUsers(data);
   }

   // function to create a new genre
   const createUser = async () => {
       const newUser = {userID, userName, userEmail}
       console.log(newUser)

       const response = await fetch(`${API_ENDPOINT}/api/users`, {
           method: "POST",
           body: JSON.stringify(newUser),
           headers: {
               "content-type": "application/json"
           }
       });

       if (response.status === 200) {
           alert(`Added new user ${userName}`);
           loadUsers();
       } else {
           alert("New item not added. Check required fields");
       }
   }

   const deleteUser = async (user_id) => {
    console.log(user_id)
       const response = await fetch(`${API_ENDPOINT}/api/users/${user_id}`, {
           method: "DELETE"});

       if (response.status === 200){
           alert(`Deleted user `);
           loadUsers();
       } else {
           alert("User not deleted");
       }
   }

   const editUser = (user) => {     
       // navigate to edit page, sending state props to the edit page/component 
       navigate("/editUser", { state: { userToEdit: user }});
   }

   useEffect(() => {
       loadUsers();
   }, []);
  return (
    <div>
      <NavBar></NavBar>
      <h2>Users</h2>
      <table className="table">
        <thead>
          <tr className="table-rows">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="table-rows">
              <td>{user.user_id}</td>
              <td>{user.user_name}</td>
              <td>{user.user_email}</td>
              <td className="table-button">
              <button 
                    onClick={() => editUser(user)}
                >Edit</button>
              </td>
              <td className="table-button">
                <button
                    onClick={() => deleteUser(user.user_id)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="form-create-title">Add a new User</h4>
      <form className="form-create">
        <label for="user-name">Name: </label>
        <input 
          name="userName"
          type="text" 
          id="user-name" 
          className="form-create-input" 
          onChange={e => setUserName(e.target.value)}
        />
        <label for="user-email">Email: </label>
        <input 
          name="userEmail"
          type="text" 
          id="user-email" 
          className="form-create-input" 
          onChange={e => setUserEmail(e.target.value)}
        />
        <button type="button" onClick = {() => createUser()}>Add</button>
      </form>
    </div>
  );
}

export default Users;
