import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [userData, setUserData] = useState({ name: "", email: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email === "" || userData.name === "" || userData.text === "")
      return alert("Please fill all the fields!");
    alert(
      `Name: ${userData.name} \nEmail: ${userData.email}\nText: ${userData.text}`
    );
    setUserData({ name: "", email: "", text: "" });
  };

  return (
    <>
      <section className="w-full flex sm:flex-row flex-col-reverse items-center justify-center">
        <section className="flex w-full items-center justify-center ">
          <div className="btn w-full h-full flex flex-col justify-center items-end">
            <div className="w-full flex justify-between gap-5">
              <Button
                text="Via support chat"
                icon={<MdOutlineMessage className="text-xl" />}
              />
              <Button
                text="Via call"
                icon={<IoIosCall className="text-xl" />}
              />
            </div>
            <div className="w-full">
              <button className="w-full flex items-center justify-center gap-4 hover:text-white hover:bg-black active:bg-gray-800 mt-4 mb-6 border-2 border-black rounded-md h-[44px] font-semibold uppercase text-xl">
                <MdOutlineMessage className="text-2xl" />
                Via Email Form
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-between gap-2 px-4 pt-2 "
            >
              <input
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                value={userData.name}
                type="text"
                id="name"
                className="relative mb-4 border-2 p-2 h-[40px] border-gray-600 outline-none rounded-sm text-black "
              />
              <label
                htmlFor="name"
                className="absolute -mt-[10px] ml-5 px-[5px] bg-white text-[14px] font-semibold text-black uppercase"
              >
                Name
              </label>

              <input
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                value={userData.email}
                type="text"
                id="email"
                className="relative mb-4 border-2 p-2 h-[40px] border-gray-600 outline-none rounded-sm text-black "
              />
              <label
                htmlFor="email"
                className="absolute mt-[54px] ml-5 px-[5px] bg-white text-[14px] font-semibold text-black uppercase"
              >
                E-Mail
              </label>

              <textarea
                onChange={(e) =>
                  setUserData({ ...userData, text: e.target.value })
                }
                value={userData.text}
                type="text"
                id="text"
                className="relative mb-4 border-2 p-2 h-full border-gray-600 outline-none rounded-sm text-black"
              />
              <label
                htmlFor="text"
                className="absolute mt-[118px] ml-5 px-[5px] bg-white text-[14px] font-semibold text-black uppercase"
              >
                Text
              </label>
            </form>
            <button
              onClick={handleSubmit}
              className="w-[40%] mr-4 bg-black text-white text-xl uppercase px-2 py-1 rounded-md"
            >
              Submit
            </button>
          </div>
        </section>
        <section className="w-full mb-8 sm:mb-0 h-full flex justify-center items-center">
          <img
            className="h-full w-full"
            src="/images/myimage.svg"
            alt="image-logo"
          />
        </section>
      </section>
    </>
  );
};

export default ContactForm;
