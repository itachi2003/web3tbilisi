import OneTeam from "./Oneteam";
import p1 from "../../images/1.png";
import p2 from "../../images/2.png";
import p3 from "../../images/3.png";
import p4 from "../../images/4.png";
import p5 from "../../images/5.png";
import p6 from "../../images/6.png";
import p7 from "../../images/7.png";


const Team = () => {
  return (
    <>
      <div className="lg:mt-32 md:mt-24 mt-20 flex flex-col font-termina">
        <div className="flex lg:flex-row lg:flex-wrap lg:justify-between 1xl:flex-nowrap 1xl:overflow-x-scroll 1xl:overflow-y-hidden 1xl:w-full 1xl:h-full 1xl:scrollbar ">
          <OneTeam
            properties="Properties : Positive Humans - Simon"
            Fullname="Pojitibu #1"
            image={p1}
            imgwidth="1xl:w-[324px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
          
            logos= {true}
            Target="blank"
          />
          <OneTeam
            properties="Properties : Positive Humans - BiLaL"
            Fullname="Pojitibu #2"
            image={p2}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
           
          
            logos= {true}
            Target=""
          />
          <OneTeam
            properties="Properties : Positive Humans - Mariam"
            Fullname="Pojitibu #3"
            image={p3}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
           
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
          <OneTeam
            properties="Properties : Positive Humans - Ana"
            Fullname="Pojitibu #4"
            image={p4}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            
           
            logos= {true}
            Target="blank"

          />
          <OneTeam
            properties="Properties : Positive Humans - Nini"
            Fullname="Pojitibu #5"
            image={p5}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
           
            link1="#"
            link2="#"
            logos= {false}
            Target=""

          />
          <OneTeam
            properties="Properties : Positive Humans - Akaki"
            Fullname="Pojitibu #6"
            image={p6}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
          <OneTeam
            properties="Properties : Positive Humans - Giorgi"
            Fullname="Pojitibu #7"
            image={p7}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
           
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
          
        </div>
      </div>
    </>
  );
};

export default Team;