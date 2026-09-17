import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'
const App = () => {

  const [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState([

  {
    id:1,
    name:"Snehal",
    email:"solankesnehal96k@gmail.com",
    designation:"Developer",
    emp_id:"emp123",
    mobile:8788211516,
    role:"manager",
  },
    {
    id:2,
    name:"Snehal",
    email:"solankesnehal96k@gmail.com",
    designation:"Developer",
    emp_id:"emp123",
    mobile:8788211516,
    role:"manager",
  },
    {
    id:3,
    name:"Snehal",
    email:"solankesnehal96k@gmail.com",
    designation:"Developer",
    emp_id:"emp123",
    mobile:8788211516,
    role:"manager",
  },
    {
    id:4,
    name:"Snehal",
    email:"solankesnehal96k@gmail.com",
    designation:"Developer",
    emp_id:"emp123",
    mobile:8788211516,
    role:"manager",
  },
    {
    id:5,
    name:"Snehal",
    email:"solankesnehal96k@gmail.com",
    designation:"Developer",
    emp_id:"emp123",
    mobile:8788211516,
    role:"manager",
  }

  ])

  const[editUser,setEditUser] =useState(null);

  let handleDelete = (id) =>{
     let filteresUser = users.filter(elem => elem.id !==id)
     setUsers(filteresUser);
  };
  
  return (
    <div>
      <Navbar setToggle={setToggle} 
      toggle={toggle} 
      setEditUser={setEditUser} />

      {toggle ? (
      <UserForm 
      setEditUser={setEditUser}
      setUsers={setUsers} 
      setToggle={setToggle} 
      editUser={editUser}
      />
      ) : (
      <div className="h-[90%] mt-5 flex flex-row flex-wrap items-center justify-center">

      
        {users.map((elem)=>{
          return(
             <UserCard 
             key={elem.id} 
             user={elem} 
             handleDelete={handleDelete} 
             setToggle={setToggle}
             setEditUser={setEditUser}
             />
          )

        })}

      </div>
      )}

    </div>
  );
};

export default App
