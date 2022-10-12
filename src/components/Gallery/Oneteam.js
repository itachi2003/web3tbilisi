
const OneTeam = ({
    Fullname,
    properties,
    image,
    imgwidth,
    logos,
  }) => {
    return (
      <div className="lg:w-[23%] lg:mr-0 md:mr-6 mr-5">
        <img src={image} alt="panda img" className={` ${imgwidth} ' md:mt-6 mt-3 max-w-none lg:max-w-full rounded-roundd ' `} />
        <h3 className=" text-white md:text-xl lg:text-base xl:text-xl text-base md:mt-3 mt-2 md:w-[105%] w-[102%]">{Fullname}</h3>
        <h4 className=" text-white md:text-base text-xs opacity-[0.5]  md:mt-2 mt-1 md:w-[105%] w-[102%] small:text-[0.65rem]">{properties}</h4>
        <div className={logos ? "flex flex-wrap md:mt-4 mt-2 opacity-[0.5] " : "hidden"}>
          
         
        </div>
        <div className={logos ? "hidden" : "flex flex-wrap md:mt-4 mt-2 opacity-[0.5] " }>
        </div>
      </div>
    );
  };
  
  export default OneTeam;