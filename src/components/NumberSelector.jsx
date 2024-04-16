const NumberSelector = ({ selectedNum, setSelectedNum, isError }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleSelector = (value) => {
    setSelectedNum(value);
  };

  return (
    <>
      <section>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="w-full text-red-600 text-center p-2">{isError}</p>
          <div className="sm:w-full w-[90vw] flex gap-4">
            {numbers.map((value, index) => {
              return (
                <div
                  onClick={() => handleSelector(value)}
                  key={index}
                  className={`${
                    selectedNum === value
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } sm:px-5 py-2 cursor-pointer border text-center w-full border-black text-xl font-semibold`}
                >
                  {value}
                </div>
              );
            })}
          </div>
          <h1 className="w-full text-center sm:text-end py-2 text-xl font-bold">
            Select Number
          </h1>
        </div>
      </section>
    </>
  );
};

export default NumberSelector;
