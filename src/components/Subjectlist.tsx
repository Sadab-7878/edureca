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
          <div className="flex flex-col justify-start py-10 px-10   rounded-md shadow-lg w-[900px]">
            {/* 1 */}
            <div className="">
              {/* 1 */}
              <div className="font-medium">Subject List</div>
            </div>
            {/* 2 */}
            <div className="text-center space-y-5 mt-10">
              {/* 1 */}
              <div className="space-x-20">
                <button className="text-[#5900D9] bg-[#864AB80D] w-[140px] py-3 rounded-md font-semibold">
                  বাংলা
                </button>
                <button className="text-[#1456E6] bg-[#165EFD1A] w-[140px]  py-3 rounded-md font-semibold">
                  ইংরেজি
                </button>
                <button className="text-[#5CB07F] bg-[#65C18C1A] w-[140px]  py-3 rounded-md font-semibold">
                  গনিত
                </button>
                <button className="text-[#E88836] bg-[#FF953B1A] w-[140px]  py-3 rounded-md font-semibold">
                  ইতিহাস
                </button>
              </div>

              {/* 2 */}

              <div className="space-x-20">
                <button className="text-[#5900D9] bg-[#864AB80D] w-[125px] py-3 rounded-md font-semibold">
                বিজ্ঞান
                </button>
                <button className="text-[#1456E6] bg-[#165EFD1A] w-[180px]  py-3 rounded-md font-semibold">
                ডিজিটাল টেকনোলোজি
                </button>
                <button className="text-[#5CB07F] bg-[#65C18C1A] w-[125px]  py-3 rounded-md font-semibold">
                জীবন জীবিকা
                </button>
                <button className="text-[#E88836] bg-[#FF953B1A] w-[125px]  py-3 rounded-md font-semibold">
                স্বাস্থ্য সুরক্ষা
                </button>
              </div>

              {/* 3 */}

              <div className="space-x-10">
                <button className="text-[#5CB07F] bg-[#65C18C1A] w-[240px]  py-3 rounded-md font-semibold">
                শিল্প সংস্কৃতি
                </button>
                <button className="text-[#E88836] bg-[#FF953B1A] w-[240px]  py-3 rounded-md font-semibold">
                ইসলাম শিক্ষা
                </button>
              </div>
            </div>
          
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Teacher1;
