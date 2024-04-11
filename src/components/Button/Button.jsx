const Button = ({ text, icon }) => {
  return (
    <>
      <button className="w-full flex items-center justify-center gap-2 bg-black text-white p-3 rounded-md uppercase text-md font-semibold">
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
