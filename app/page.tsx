"use client";

export default function Home() {
  // functions: ===================================================================
  const handlein = (event: any) => {
    event.target.placeholder = "";
  };
  const handleblurusername = (event: any) => {
    event.target.placeholder = "Username";
  };
  const handlepass = (event: any) => {
    event.target.placeholder = "Password";
  };

  // return: ======================================================================
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[850px] h-4/6 rounded-[20px] shadow-custom-1 bg-css">
        {/* Header ------------------------------------------------------------- */}
        <div className="h-[15%] font-light flex justify-start items-center gap-6 pl-[20px] text-white">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="cursor-pointer p-2 rounded-[7px] bgi-css transition duration-100 ease-in">
            Home
          </div>
          <div className="cursor-pointer p-2 rounded-[7px] bgi-css transition duration-100 ease-in">
            Services
          </div>
          <div className="cursor-pointer p-2 rounded-[7px] bgi-css transition duration-100 ease-in">
            Utilities
          </div>
          <div className="cursor-pointer p-2 rounded-[7px] bgi-css transition duration-100 ease-in">
            Courses
          </div>
          <div className="cursor-pointer p-2 rounded-[7px] bgi-css transition duration-100 ease-in">
            Contact Us
          </div>
        </div>
        {/* main --------------------------------------------------------------- */}
        {/* form ------------------- */}
        <div className="h-[85%] w-full flex justify-center items-center">
          <div className="w-[45%] h-full flex justify-center items-center">
            <form className="w-4/5 h-4/5 bg-white rounded-[20px] flex flex-col items-center">
              <h2 className="h-[55px] w-auto flex justify-center items-end pb-1 px-1">
                <strong className="text-gray-700 font-medium">
                  <span className="text-blue-500">Login</span> Your Account
                </strong>
              </h2>
              <input
                type="text"
                placeholder="Username"
                onFocus={handlein}
                onBlur={handleblurusername}
                className=" w-[80%] h-9 mt-[70px] px-2 border-b border-blue-500 outline-none font-light"
              />
              <input
                type="text"
                placeholder="Password"
                onFocus={handlein}
                onBlur={handlepass}
                className=" w-[80%] h-9 mt-[20px] px-2 border-b border-blue-500 outline-none font-light"
              />
              <button className="w-56 h-10 mt-[65px] rounded-md bg-gradient-to-l hover:bg-gradient-to-r from-blue-400 to-blue-700  text-white  hover:ring-4 font-medium transition duration-100 ease-linear">
                Login
              </button>
            </form>
          </div>
          {/* text ------------------- */}
          <div className="w-[55%] h-full font-light flex flex-col items-center pt-[110px] pr-9 text-white">
            <h2 className="text-2xl mb-6">COMMUNICATION</h2>
            <p className=" text-justify leading-5">
              Communication plays a pivotal role in our interconnected world.
              That is the essential conduit through which ideas, thoughts,
              emotions and other are exchanged. Effective communication fosters
              understanding, and cultivates strong relationships.
            </p>
            <div className="flex justify-end w-full">
              <button className="w-[90px] h-8 mt-[12px] mr-[10px] rounded-md bg-white text-sm text-gray-700 font-light transition duration-100 ease-linear">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
