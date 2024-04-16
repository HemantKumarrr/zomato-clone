
const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="w-full h-screen flex sm:px-0 px-5 items-center justify-center" >
        <div className="flex items-center sm:flex-row flex-col-reverse justify-center">
            <div className="w-full">
                <img src="/dices_main.png" alt="home_image" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-5 py-4">
                <h1 className="text-8xl font-bold uppercase" >Dice Game</h1>
                <div className="w-full flex items-center sm:justify-end pr-8" >
                    <button onClick={toggle} className="text-xl active:bg-white active:text-black active:border-2 active:border-black bg-black text-white w-[50%] py-2 rounded-md hover:scale-[1.1]" >Play Now</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default StartGame
