const Card = ({ modeTitle, modeDesc, modeImage }) => {
  return (
    <>
      <div className={`hover:scale-[1.06] ease-out duration-500 w-full h-[15rem] mr-8 cursor-pointer rounded-xl  shadow-xl flex flex-col flex-wrap items-center justify-end bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] bg-cover bg-center`}>
          <div className="bg-white rounded-b-xl border w-full px-5 py-2">
            <h1 className="text-2xl text-gray-800">{modeTitle}</h1>
            <p className="py-1">{modeDesc}</p>
          </div>
      </div>
    </>
  );
};

export default Card;
