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
          <div className="flex flex-col justify-between py-10 px-10   rounded-md shadow-lg w-[900px]">
            {/* 1 */}
            <div className="flex items-center justify-between">
              {/* 1 */}
              <div className="font-medium">Student Result Prediction</div>
              <div>
                {/* 2 */}
                <button className="flex justify-center items-center text-white bg-[#5b40ff] px-5 py-2 gap-2 rounded-md">
                  <p>Subject Recommendation</p>
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="text-center space-y-5">
              {/* 1 */}
              <div>Fail Possibility Rate!</div>
              {/* 2 */}

              <div>
                <div
                  className="radial-progress bg-white text-[#D11212] border-gray-100 border-4"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="text-center mx-auto  w-[450px] rounded-md bg-[#5b40ff]">
              <p className="py-5 text-white">
                Honorable Teacher we want to support your student’s <br />{" "}
                success! Our analysis indicates a current predictive <br /> fail
                rate of 65%. Let's work together to explore <br /> strategies
                for improvement and ensure your <br /> continued progress.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Teacher1;
