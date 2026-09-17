import React from 'react'
import {useForm} from "react-hook-form";
import {nanoid} from "nanoid";


const UserForm = ({setUsers, setToggle, editUser,setEditUser}) => {


    let {
        register,
        handleSubmit,
        reset,
        formState: {errors,isValid},
    } = useForm({
        mode: "onChange",
        defaultValues:{
        name: editUser.name,

        }
    });

 

    let handleFormSubmit = (data) =>{

        if(editUser){
            setUsers((prev)=> {
                return prev.map(val => {
                    return val.id === editUser.id ? {...val, ...data} : val;
                })
            })
            setEditUser(null);
        }
        else{
            setUsers((prev)=> [...prev, {...data, id:nanoid()}])
        }

        
        reset();
        setToggle(false);
    }

  return (
    <div className='h-[90%] flex flex-col gap-6 items-center justify-center '>
      <h1 className='text-3xl font-bold'>Add a User</h1>
      <form 
      onSubmit={handleSubmit(handleFormSubmit)}
      action=""
        className='border-3 flex flex-col gap-8 w-[30%] justify-center items-center'
      >
        <input
        {...register("name",{required:"Employee name is required"})}
        className='outline-0 p-4 border rounded-xl text-xl mt-4'
        type="text"placeholder='Employee Name' 
        />
        {errors.name && <p className='text-red-700'>{errors.name.message}</p>}

        <input
        {...register("email",{
            required:"Employee email is required",
            pattern:{
                value:"/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm",
                message:"Please enter valid email",
            },
        })}
        className='outline-0 p-4 border rounded-xl text-xl' 
        type="email"placeholder='Employee Email' 
        />
        {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
        <input 
        {...register("mobile",{required:"Employee mobile is required",
            minLength:{
                value:10,
                message:"Min 10 Digit are required",
            },
            maxLength:{
                value:10,
                message:"Max 10 Digit are required"
            }
        })}
        className='outline-0 p-4 border rounded-xl text-xl'
        type="number"placeholder='Employee Number' 
        />
        {errors.mobile && <p className='text-red-700'>{errors.mobile.message}</p>}

        <input
        {...register("designation",{required:"Employee designation is required"})}
        className='outline-0 p-4 border rounded-xl text-xl'
        type="text"placeholder='Employee Designation' 
        />

        {errors.designation && <p className='text-red-700'>{errors.designation.message}</p>}

        <input
        {...register("emp_id",{required:"Employee ID is required"})}
        className='outline-0 p-4 border rounded-xl text-xl'
        type="text"placeholder='Employee Id' 
        />
        
        {errors.emp_id && <p className='text-red-700'>{errors.emp_id.message}</p>}

        <div>
            <div className='flex gap-10'>
                <p className='text-xl'>Manager</p>
                <input {...register("role",{required:"Employee Role is required"})} type="radio" value="manager"/>
            </div>
            {errors.role && <p className='text-red-700'>{errors.role.message}</p>}
            <div className='flex gap-5'>
                <p className='text-xl'>Employee</p>
                <input {...register("role",{required:"Employee Role is required"})} type="radio" value="employee"/>
            </div>
            {errors.role && <p className='text-red-700'>{errors.role.message}</p>}
        </div>
        
        <button
         disabled={!isValid}
         className={`${!isValid ? 
         "bg-gray-500 pointer-events-none" :
         "bg-blue-900"} text-white py-3 px-6 text-xl rounded-xl cursor-pointer`}>
            Add User
                </button>


      </form>
    </div>
  )
}

export default UserForm
