import { useEffect, useState } from "react";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(null);
  const [randomNum, setRandomNum] = useState(1);
  const [isError, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  console.log(isError);
  const roleDice = () => {
    if (!selectedNum) {
      setError("Please select a number first");
      return;
    }
    const num = Math.floor(Math.random() * 6) + 1;
    setRandomNum(num);

    if (selectedNum === num) {
      setScore((prev) => prev + num);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };

  useEffect(() => {
    const dump = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(dump);
  }, [isError]);

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <section className="w-full py-12 sm:px-[5rem] px-[2rem]">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          <TotalScore score={score} />
          <NumberSelector
            selectedNum={selectedNum}
            setSelectedNum={setSelectedNum}
            isError={isError}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4 pt-20">
          <RoleDice roleDice={roleDice} randomNum={randomNum} />
          <h1 className="font-semiold text-2xl">Click on Dice to roll</h1>
          <button
            className="border-2 border-black px-20 py-2 text-xl bg-white hover:bg-black text-black hover:text-white rounded-md"
            onClick={resetScore}
          >
            Reset score
          </button>
          <button
            className="border px-20 py-2 text-xl bg-black text-white rounded-md"
            onClick={() => setShowRules((prev) => !prev)}
          >
            Show Rules
          </button>
        </div>
        <div className="py-4">{showRules && <Rules />}</div>
      </section>
    </>
  );
};

export default GamePlay;
