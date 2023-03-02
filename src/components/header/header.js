import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [state, setState] = useState("hidden");
  const [state2, setState2] = useState("");

  const sideMenuHandler = (e) => {
    e.preventDefault();
    if (state === "hidden") {
      setState2("relative");
      setState("absolute top-0");
    } else {
      setState("hidden");
      setState2("");
    }
  };

  return (
    <header className={`${state2}`}>
      <div className="w-[max(327px,87.2vw)] tablet:w-[79.2vw] flex flex-row items-center justify-between mx-auto pt-[max(40px,10.67vw)] tablet:pt-[2.60vw] font-[Inter]">
        <div
          className="flex flex-col tablet:w-[max(28px,2.46vw)] h-[max(36px,9.6vw)]  w-[max(36px,9.6vw)] tablet:h-[max(11px,1.875vw)] gap-[max(5px,0.04vw)] tablet:gap-0 tablet:justify-evenly hover:cursor-pointer"
          onClick={sideMenuHandler}
        >
          <div className="bg-[#212121] w-[77.7%] tablet:w-[100%] h-[max(3px,0.8vw)] ml-[max(4px,1.06vw)] tablet:h-[0.28vw] tablet:ml-0"></div>
          <div className="bg-[#212121] w-[50%] tablet:w-[70%] h-[max(3px,0.8vw)] tablet:h-[0.28vw] ml-[max(4px,1.06vw)] tablet:ml-0"></div>
        </div>
        <div className="text-[0] tablet:text-[1.3vw] font-[400] leading-[1.2em] text-[#080A16] underline  hover:cursor-pointer">
          <Link to="/contact">Lets's Talk</Link>
        </div>
      </div>

      {/*SIDE MENU*/}
      <nav
        className={`${state} bg-side-menu-img bg-contain bg-[color:#D1D4DB] bg-fixed bg-no-repeat h-[100vh] w-[100vw]`}
      >
        <input
          type="button"
          value="X"
          onClick={sideMenuHandler}
          className="border tablet:w-[5.625vw] tablet:h-[5.625vw] hover:cursor-pointer"
        />
        <div className="w-[18.28%] flex flex-col gap-[5.26vw] border">
          <div className="flex flex-col gap-[2.6vw] font-[Inter] text-[#015450] text-[2.08vw] font-[400] leading-[1.25em]">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/portfolio">Projects</Link>
            </div>
            <div>
              {" "}
              <Link to="/">Services</Link>
            </div>
            <div>
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
          <div>
            <div>Let's talk about your next project</div>
            <div>
              {" "}
              <Link to='/contact'>Let's Talk</Link>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between">
            <div>Instagram</div>
            <div>Dribble</div>
            <div>Twitter</div>
          </div>
        </div>
      </nav>
    </header>
  );
};
