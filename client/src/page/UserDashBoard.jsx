import React from "react";

const UserDashboard = () => {
  return (
    <>
    <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Dashboard</h2>
    </div>
      <div className="flex justify-center items-center h-100  bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          <div className="text-left mb-6 space-y-2">
            <p>
              <span className="font-semibold">Name:</span>Uday
            </p>
            <p>
              <span className="font-semibold">Email:</span>udaydhurvey@gmail.com
            </p>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <button
              // onClick={onUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl"
            >
              Update
            </button>

            <button
              // onClick={onDelete}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl"
            >
              Delete Account
            </button>

            <button
              // onClick={onLogout}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
