import "./main.scss";
import first from "../assets-portfolio/Frame 41700.png";
import second from "../assets-portfolio/Frame 41701.png";
import third from "../assets-portfolio/Frame 41702.png";
import fourth from "../assets-portfolio/Frame 41703.png";
import fifth from "../assets-portfolio/Frame 41704.png";
import sixth from "../assets-portfolio/Frame 41705.png";
import seventh from "../assets-portfolio/Frame 41706.png";
import eight from "../assets-portfolio/Frame 41707.png";
import ninth from "../assets-portfolio/Frame 41708.png";
import tenth from "../assets-portfolio/Frame 41709.png";
import eleventh from "../assets-portfolio/Frame 41710.png";
import twelfth from "../assets-portfolio/Frame 41711.png";
import { useState } from "react";
import { useEffect } from "react";

export const Main = () => {
  const data = [
    {
      id: 1,
      img: first,
      type: "web",
      alt: "Web Landing Page",
      title: "Web Landing Page",
      desc: "Description",
    },
    {
      id: 2,
      img: second,
      type: "mobile",
      alt: "CryptoLite",
      title: "CryptoLite",
      desc: "Description",
    },
    {
      id: 3,
      img: third,
      type: "web",
      alt: "Myrax",
      title: "Myrax",
      desc: "Description",
    },
    {
      id: 4,
      img: fourth,
      type: "mobile",
      alt: "SweetHome",
      title: "SweetHome",
      desc: "Description",
    },
    {
      id: 5,
      img: fifth,
      type: "mobile",
      alt: "Tripping Cash",
      title: "Tripping Cash",
      desc: "Description",
    },
    {
      id: 6,
      img: sixth,
      type: "mobile",
      alt: "SweetHome",
      title: "uBook",
      desc: "Description",
    },
    {
      id: 7,
      img: seventh,
      type: "mobile",
      alt: "Trim Banking",
      title: "Trim Banking",
      desc: "Description",
    },
    {
      id: 8,
      img: eight,
      type: "mobile",
      alt: "SafeX",
      title: "SafeX",
      desc: "Description",
    },
    {
      id: 9,
      img: ninth,
      type: "mobile",
      alt: "Sparrow",
      title: "Sparrow",
      desc: "Description",
    },
    {
      id: 10,
      img: tenth,
      type: "mobile",
      alt: "KnowledgeX",
      title: "KnowledgeX",
      desc: "Description",
    },
    {
      id: 11,
      img: eleventh,
      type: "web",
      alt: "Diamond",
      title: "Diamond",
      desc: "Description",
    },
    {
      id: 12,
      img: twelfth,
      type: "web",
      alt: "Starshop",
      title: "Starshop",
      desc: "Description",
    },
  ];

  const portfolioList = data.map((portfolio) => {
    return (
      <div className="portfolio-list" key={portfolio.id}>
        <img src={portfolio.img} alt={portfolio.alt} />
        <div className="cont">
          <div className="title">{portfolio.title}</div>
          <div className="desc">{portfolio.desc}</div>
        </div>
      </div>
    );
  });

  const [state, setState] = useState(portfolioList);
  const [all, setAllState] = useState('');
  const [phone, setPhoneState] = useState('');
  const [website, setWebState] = useState('');
  const [branding, setBrandState] = useState('');

  useEffect(() => {
    setState(portfolioList);
    setAllState('green')
  }, []);

  const web = data.filter((portfolio) => portfolio.type === "web");
  const mobile = data.filter((portfolio) => portfolio.type === "mobile");

  const webList = web.map((portfolio) => {
    return (
      <div className="portfolio-list" key={portfolio.id}>
        <img src={portfolio.img} alt={portfolio.alt} />
        <div className="cont">
          <div className="title">{portfolio.title}</div>
          <div className="desc">{portfolio.desc}</div>
        </div>
      </div>
    );
  });
  const mobileList = mobile.map((portfolio) => {
    return (
      <div className="portfolio-list" key={portfolio.id}>
        <img src={portfolio.img} alt={portfolio.alt} />
        <div className="cont">
          <div className="title">{portfolio.title}</div>
          <div className="desc">{portfolio.desc}</div>
        </div>
      </div>
    );
  });

  const portfolioSorter = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Web") {
      setState(webList);
      setWebState("green");
      setAllState("");
      setPhoneState("");
      setBrandState("");
      
    } else if (e.target.innerText === "Mobile") {
      setState(mobileList);
      setWebState("");
      setAllState("");
      setPhoneState("green");
      setBrandState("");
    } else if (e.target.innerText === "All") {
      setState(portfolioList);
      setWebState("");
      setAllState("green");
      setPhoneState("");
      setBrandState("");
    } else if (e.target.innerText === "Branding") {
      setState(portfolioList);
      setWebState("");
      setAllState("");
      setPhoneState("");
      setBrandState("green");
    }
  };

  return (
    <main className="main">
      <div className="one">
        <div className="green">XIII</div>
        <div>Let our work do the telling...</div>
      </div>
      <div className="two">
        <div className="filter">
          <div className="disappear cursor">Filter by:</div>
          <div className={`cursor ${all}`} onClick={portfolioSorter}>
            All
          </div>
          <div className={`cursor ${phone}`} onClick={portfolioSorter}>
            Mobile
          </div>
          <div className={`cursor ${website}`} onClick={portfolioSorter}>
            Web
          </div>
          <div className={`cursor ${branding}`} onClick={portfolioSorter}>
            Branding
          </div>
        </div>
        <div className="port">{state}</div>
      </div>
      <div className="three">
        <div className="ready">Ready for your next project...?</div>
        <div className="tell">Tell us more</div>
      </div>
    </main>
  );
};
