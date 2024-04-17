import { IoMdClose } from "react-icons/io";

const Rules = ({setShowRules}) => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center" >
      <IoMdClose onClick={()=> setShowRules(prev=> false)} className="text-5xl text-white hover:text-cyan-600 cursor-pointer" />
        <div className="bg-[#fbf1f1] px-8 py-5  rounded-lg">
          <h1 className="font-bold text-2xl py-2" >How to play dice game</h1>
          <p className="mb-1 font-semibold">Select any number</p>
          <p className="mb-1 font-semibold">Click on dice image</p>
          <p className="mb-1 font-semibold">
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </p>
          <p className="mb-1 font-semibold">if you get wrong guess then 2 point will be dedcuted </p>
        </div>
      </div>
    </>
  );
};

export default Rules;
