import myrax from "../../../assets/images/myrax.png";
import miok from "../../../assets/images/miok.png";
import tripping_cash from "../../../assets/images/tripping_cash.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import './sect2.scss';
import { Footer } from './../../footer/footer';

////portfolio//
const worksInfo = [
  {
    id: 1,
    src: miok,
    alt: "miok_landing_page",
    title: "MIOK Landing Page",
    info: "Landingpage, UI, web",
    // id2: false,
  },
  {
    id: 2,
    src: myrax,
    alt: "myrax_landing_page",
    title: "Myrax",
    info: "UI, UX, Web, Crypto, Web3",
    // id2: true,
  },
  {
    id: 3,
    src: tripping_cash,
    alt: "tripping_cash_landing_page",
    title: "Tripping Cash",
    info: "mobile, UX, UI, NFT",
    // id2: false,
  },
];
const worksElements = worksInfo.map((each) => {
  return (
    <div className="work" key={each.id}>
      <div className="image">
        <img src={each.src} alt={each.alt} />
      </div>
      <div className="desc" >
        <div>
          <div className="title">{each.title}</div>
          <div className="info">{each.info}</div>
        </div>
      </div>
    </div>
  );
})
////portfolio//


export const Sect2 = () => {
  const [width, setWidth] = useState(0)
  const row3 = useRef();
  // const { innerWidth, innerHeight } = window;

  useEffect(() => {
    const width =
      (row3.current.scrollWidth - row3.current.offsetWidth);
    setWidth(width);
  }, []);

  return (
    <div className="sect2">
      <div className="row1">
        <div className="summary">
          <div className="heading">
            WE ARE <br />
            XIII
          </div>
          <div className="info">
            We are UX Design strategists with years of experience and a strong
            <br /> background
            <span>
              in Digital Transformation, Fintech, Blockchain, Web3, <br />
              Enterprise products
            </span>
            , working with some of the best teams and clients <br />
            on some of the leading financial organizations and teams.
          </div>
        </div>
        <div className="stats">
          <div className="stats1">
            <div className="value">90%</div>
            <div className="info_topic">Success rate</div>
            <div className="info">
              The boy made no answer; he <br /> shrank closer to the entrance.
              The <br />
              first bell went.
            </div>
          </div>
          <div className="stats2">
            <div className="value">50+</div>
            <div className="info_topic">Projects</div>
            <div className="info">
              FIVE or six half-grown <br />
              larrikinsonen sat on the sill of the <br /> big window
            </div>
          </div>
        </div>
      </div>

      <div className="row2">
        <div className="fin-tech1">
          FINTECH BLOCKCHAIN WEB3 DIGITAL TRANSFORMATION
        </div>
        <div className="fin-tech2">
          FINTECH BLOCKCHAIN WEB3 DIGITAL TRANSFORMATION
        </div>
      </div>

      <motion.div className="row3" ref={row3}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {worksElements}
        </motion.div>
      </motion.div>

      <div className="see_more_work">
        <span className="text">See more work</span>
        <span id="right_arrow">&#8594;</span>
      </div>

      <div className="row4">
        <div className="quotation">"</div>
        <div className="main">
          <div className="comment">
            I realized I had found something that was missing <br /> from every
            other school that I’d looked at — I loved <br /> how passionate
            everybody was about XIII agency.
          </div>
          <div className="user_info">
            <div className="image"></div>
            <div className="name">Sarah Lein</div>
            <div className="position">Infinix CEO</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
