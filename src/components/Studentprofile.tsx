import Header from "./Header";
import Footer from "./Footer";

const Teacher1 = () => {
  return (
    <>
      <div className="">
        <Header />

        <div className="my-10  flex justify-evenly  mx-20">
          <div className="max-w-[300px]  p-10 space-y-10 shadow-lg rounded-md">
            <button className="flex justify-center items-center text-[#5A616C] hover:text-white hover:bg-[#5b40ff] px-5 py-2 gap-2 hover:rounded-md">
              <img src="dashboard.png" alt="" className="w-5 " />

              <p>Dashboard</p>
            </button>

            <button className="flex justify-center items-center hover:bg-[#5b40ff] px-5 py-2 gap-2 hover:rounded-md text-[#5A616C] hover:text-white">
              <img src="matter.png" alt="" className="w-5 " />

              <p>Subjects</p>
            </button>

            <button className="flex justify-center items-center hover:bg-[#5b40ff] px-5 py-2 gap-2 hover:rounded-md text-[#5A616C] hover:text-white">
              <img src="assessment.png" alt="" className="w-5 " />

              <p>Evaluation</p>
            </button>

            <button className="flex justify-center items-center hover:bg-[#5b40ff] px-5 py-2 gap-2 hover:rounded-md text-[#5A616C] hover:text-white">
              <img src="user.png" alt="" className="w-5 " />

              <p>Profile Settings</p>
            </button>

            <button className="flex justify-center items-center hover:bg-[#5b40ff] px-5 py-2 gap-2 hover:rounded-md text-[#5A616C] hover:text-white">
              <img src="support.png" alt="" className="w-5 " />

              <p>Support & Help</p>
            </button>

            <button className="flex justify-center items-center hover:bg-[#5b40ff] px-5 py-2 gap-2 hover:rounded-md text-[#5A616C] hover:text-white">
              <img src="logout.png" alt="" className="w-5 " />

              <p>Log Out</p>
            </button>
          </div>
          <div className="flex flex-col items-center py-10 px-10   rounded-md shadow-lg w-[900px]">
            <div className="avatar">
              <div className="w-28 rounded-full">
                <img src="profilepic.png" alt="profile" />
              </div>
            </div>

            <p className="mt-4 font-medium text-[24px]">Jubayed Hossain</p>
            <p className="text-[14px] text-[#5A616C]">
              Profile photo recommended size 80x80 pixels
            </p>
            <div className="mt-4 mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Old Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                New password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>

            <button className="text-white bg-[#5b40ff] text-sm px-3 py-3 gap-2 rounded-md">Change Password</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Teacher1;
