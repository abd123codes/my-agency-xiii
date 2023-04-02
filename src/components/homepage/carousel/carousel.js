import { useState, useRef } from "react";
import miok from '../assets/miok.png';
import myrax from '../assets/myrax.png';
import tripCash from "../assets/tripping_cash.png";

function Carousel() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);

  };

  const handleMouseUp = () => {
    setIsDown(false);

  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    ref.current.scrollLeft += e.deltaY;
  };

  // const handleMouseLeave = (e) => {
  //   e.preventDefault();
  //   document.body.style.overflow = "auto";

  // }

  let images = [
    { img: miok, name: "Miok", desc: "miok", color: "#E4E5E4" },
    {
      img: myrax,
      name: "Myrax",
      desc: "UI UX, Web, Crypto, Web3",
      color: "#E4E5E4",
    },
    {
      img: tripCash,
      name: "Tripping Cash",
      desc: "mobile, ux, ui, NFT",
      color: "#E4E5E4",
    },
  ];

  return (
    <div>
      <div
        className="flex flex-row overflow-hidden whitespace-nowrap gap-[5.21vw] hover:cursor-grab mt-[max(112.5px,30vw)] px-[10.42vw]"
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        {images.map((image, key) => {
          return (
            <div key={key}>
              <div
                style={{
                  backgroundImage: `url(${image.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[68.75vw] border h-[39.38vw] hover:cursor-pointer"
              ></div>
              <div className={`bg-[color:${image.color}] h-[7.81vw]`}>
                <div className="font-[800] text-[max(2em,2.08vw)] leading-[1.25em]">
                  {image.name}
                </div>
                <div className="font-[400] text-[max(1em,1.04vw)] leading-[1.25em]">
                  {image.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='font-[500] text-[max(0.8em,1.5625vw)] leading-[1.0714em] mt-[2.304em] border border-black w-[10em] mx-auto flex items-center justify-center py-[0.7em] rounded-[4.33em] hover:cursor-pointer hover:text-[white] hover:bg-[black]'>See more</div>
    </div>
  );
}

export default Carousel;
