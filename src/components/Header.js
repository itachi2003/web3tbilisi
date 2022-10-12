
import mouth from "../images/mouthh.png";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../style/style.css";
import Mint from "../mint";

const Header = () => {
  const [isshow, setshow] = useState(false);

  const changer = () => {
    setshow(!isshow);
  };
  return (
    <>
      <div className="flex flex-row items-center font-optivenus justify-between lg:mt-9 mt-6 md:mx-8 mx-4">
        <div className="">
         

          <a href=""><img
            src={mouth}
            alt="logo"
            className=" w-[80px] h-[80px] medium:w-16 medium:h-16 small:w-12 small:h-12"
          /></a>
        </div>
        <div>
          <h1 className="text-center text-white " >Jokes <span className=" text-lm block " >Ha   Ha   Ha</span> </h1>
        </div>
        <div className="font-termina md:text-sm text-xs medium:text-[11px] text-white ">
          <div
            className="bg-[rgba(255,255,255,0.1)] md:w-[232px] small:w-[180px] small:h-[50px] small:p-[18px_16px] w-[208px] h-[58px] lg:w-[268px] md:h-[61px] rounded-rou gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[20px_26px] lg:p-[20px_40px]  hover:bg-[rgba(255,255,255,0.5)] cursor-pointer items-center text-center"
            onClick={changer}
          >
            <button>MINT NOW</button>
          </div>
        </div>
      </div>

      <div className={isshow ? 'fixed block text-white z-10 w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.6)] overflow-y-auto scrollbarr' : 'hidden'}>
      <div id="minting-dapp">
      <div className="md:text-[34px] text-[32px] ml-auto mt-7  cursor-pointer" onClick={changer}><AiOutlineClose className="hover:fill-error-txt"/></div>
      <h1 className='font-optivenus md:text-3xl text-2xl text-center md:-mt-7 -mt-7 mb-5 w-1/2 mx-auto' >MINT</h1>

      <Mint/>
      </div>
      </div>
    </>
  );
};

export default Header;
