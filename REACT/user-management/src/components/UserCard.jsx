import React from "react";

const UserCard = ({ user, handleDelete, setEditUser, setToggle }) => {
  console.log("User card rendering...");

  return (
    <div className=" h-[90%] bg-white shadow-2xl border flex flex-col gap-2 rounded-2xl p-4 hover:shadow-xl hover:scale-103 transition-all duration-300">
      <div className="h-[80%]  rounded-full overflow-hidden">
        <img
          className="h-full self-center object-cover m-3.5"
          src="https://tse3.mm.bing.net/th/id/OIP.HRfXqa5OrV-Ynke93kwrMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-green-700 text-2xl font-semibold">{user.name}</p>
        <p className="text-xl text-gray-700">{user.email}</p>
        <p className="text-xl text-gray-700">{user.designation}</p>
        <p className="text-xl text-gray-700">{user.emp_id}</p>
      </div>
      <div className="flex gap-4 w-full justify-between">
        <button
          onClick={() => {
            setEditUser(user);
            setToggle(true);
          }}
          className="w-[50%] border px-4 py-2 rounded-lg font-medium border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="w-[50%] border px-4 py-2 rounded-lg font-medium border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default UserCard;