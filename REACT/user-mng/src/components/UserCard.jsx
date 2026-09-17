import React from 'react'

const UserCard = ({user,handleDelete,setEditUser,setToggle}) => {

    return (
    <div className='w-[300px] h-[400px] p-3 m-8 bg-pink-100 border rounded-xl flex flex-col items-center justify-center'>
      <div className='h-80% rounded-full overflow-hidden' >
        <img
        className='h-full self-center object-cover '
         src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"/>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='mt-5 text-2xl text-green-700 font-semibold'>{user.name}</p>
        <p className='text-xl text-gray-700'>{user.email}</p>
        <p className='text-xl text-gray-700'>{user.designation}</p>
        <p className='text-xl text-gray-700'>{user.emp_id}</p>
      </div>
        <div className='display-flex mt-5'>
        <button 
        onClick={()=> {
          setEditUser(user);
          setToggle(true);
        }
      }
        className='bg-red-500 border rounded text-xl mr-5 p-1'>Update</button>
        <button 
        onClick={()=>handleDelete(user.id)}
        className='bg-blue-500 border rounded text-xl p-1'>
          Remove</button>
        </div>
    </div>
  )
}

export default UserCard
