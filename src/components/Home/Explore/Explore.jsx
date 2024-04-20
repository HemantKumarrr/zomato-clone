import { IoIosArrowDown } from "react-icons/io";

const Explore = () => {
  return (
    <>
      <div className="py-12 flex flex-col gap-4">
        <h1 className="text-4xl text-gray-700 pb-5">Explore</h1>

        <div className="border-2 flex justify-between items-center cursor-pointer rounded-lg p-4">
          <div className="">
            <h1 className="text-xl text-gray-600">Popular cuisines near me</h1>
          </div>
          <IoIosArrowDown className="text-xl text-gray-600" />
        </div>

        <div className="border-2 flex justify-between items-center cursor-pointer rounded-lg p-4">
          <div className="">
            <h1 className="text-xl text-gray-600">Popular restaurant types near me</h1>
          </div>
          <IoIosArrowDown className="text-xl text-gray-600" />
        </div>

        <div className="border-2 flex justify-between items-center cursor-pointer rounded-lg p-4">
          <div className="">
            <h1 className="text-xl text-gray-600">Top Restaurant Chains</h1>
          </div>
          <IoIosArrowDown className="text-xl text-gray-600" />
        </div>

        <div className="border-2 flex justify-between items-center cursor-pointer rounded-lg p-4">
          <div className="">
            <h1 className="text-xl text-gray-600">Cities We Deliver To</h1>
          </div>
          <IoIosArrowDown className="text-xl text-gray-600" />
        </div>
        
      </div>
    </>
  );
};

export default Explore;
