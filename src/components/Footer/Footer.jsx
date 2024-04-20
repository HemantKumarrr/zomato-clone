import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="px-12 pt-12 bg-gray-100">
        <div className="flex justify-between">
            <div className="logo">
                <img className="w-[10rem]" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo_image" />
            </div>
            <div className="flex items-center gap-5" >
                <div className="text-xl px-8 py-1 border-[1px] border-gray-400 rounded-md">
                    India
                </div>
                <div className="text-xl flex items-center justify-between gap-2 px-2 py-1 border-[1px] border-gray-400 rounded-md">
                    <CiGlobe className="text-black font-bold text-xl" />
                    English
                </div>
            </div>
        </div>
        <div className="pt-6 pb-12 w-[90%] flex justify-between items-center" >
            <div>
                <h1 className="text-xl pb-4 font-medium text-black tracking-widest" >About zomato</h1>
                <ul className="text-sm tracking-[0.1rem] text-gray-600 capitalize flex flex-col gap-1" >
                    <li>Who we are</li>
                    <li>Blog</li>
                    <li>Work with us</li>
                    <li>Invester Relations</li>
                    <li>Report Fraud</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl pb-4 font-medium text-black tracking-widest" >About zomato</h1>
                <ul className="text-sm tracking-[0.1rem] text-gray-600 capitalize flex flex-col gap-1" >
                    <li>Who we are</li>
                    <li>Blog</li>
                    <li>Work with us</li>
                    <li>Invester Relations</li>
                    <li>Report Fraud</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl pb-4 font-medium text-black tracking-widest" >About zomato</h1>
                <ul className="text-sm tracking-[0.1rem] text-gray-600 capitalize flex flex-col gap-1" >
                    <li>Who we are</li>
                    <li>Blog</li>
                    <li>Work with us</li>
                    <li>Invester Relations</li>
                    <li>Report Fraud</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl pb-4 font-medium text-black tracking-widest" >About zomato</h1>
                <ul className="text-sm tracking-[0.1rem] text-gray-600 capitalize flex flex-col gap-1" >
                    <li>Who we are</li>
                    <li>Blog</li>
                    <li>Work with us</li>
                    <li>Invester Relations</li>
                    <li>Report Fraud</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className="font-thin tracking-wide text-gray-500">
            <p className="pt-4  pb-4 border-t border-gray-400" >By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
