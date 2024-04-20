import { IoIosArrowDown } from "react-icons/io";

const localities = [
  {
    place: "Connaught Place",
    restra: 275,
  },
  {
    place: "Sector 29",
    restra: 140,
  },
  {
    place: "Sector 18",
    restra: 228,
  },
  {
    place: "Rajouri Garden",
    restra: 373,
  },
  {
    place: "Saket",
    restra: 345,
  },
  {
    place: "DLF Cyber City",
    restra: 178,
  },
  {
    place: "Golf Course Road",
    restra: 158,
  },
  {
    place: "DLF Phase 4",
    restra: 223,
  },
  {
    place: "see more",
    restra: "",
  },
];

const Places = () => {
  return (
    <>
      <div className="pt-[4rem] py-8 flex flex-col gap-5">
        <h1 className="text-4xl text-gray-700">
          Popular localities in and around Delhi NCR
        </h1>
        <div className="w-full cursor-pointer flex flex-wrap">
          <div className="border-2 flex justify-between items-center shadow-md w-full hover:shadow-xl rounded-lg p-4">
            <div className="">
              <h1 className="text-2xl text-gray-800">Cannaught Place</h1>
              <p className="text-[1.1rem] text-gray-500">237 places</p>
            </div>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <div className="border-2 flex justify-between items-center shadow-md w-full hover:shadow-xl rounded-lg p-4">
            <div className="">
              <h1 className="text-2xl text-gray-800">Cannaught Place</h1>
              <p className="text-[1.1rem] text-gray-500">237 places</p>
            </div>
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
