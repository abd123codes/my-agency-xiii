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

export const Main = () => {
  const data = [
    {
      id: 1,
      img: first,
      type: "all",
      alt: "Web Landing Page",
      title: "Web Landing Page",
      desc: "Description",
    },
    {
      id: 2,
      img: second,
      type: "all",
      alt: "CryptoLite",
      title: "CryptoLite",
      desc: "Description",
    },
    {
      id: 3,
      img: third,
      type: "all",
      alt: "Myrax",
      title: "Myrax",
      desc: "Description",
    },
    {
      id: 4,
      img: fourth,
      type: "all",
      alt: "SweetHome",
      title: "SweetHome",
      desc: "Description",
    },
    {
      id: 5,
      img: fifth,
      type: "all",
      alt: "Tripping Cash",
      title: "Tripping Cash",
      desc: "Description",
    },
    {
      id: 6,
      img: sixth,
      type: "all",
      alt: "SweetHome",
      title: "SweetHome",
      desc: "Description",
    },
    {
      id: 7,
      img: seventh,
      type: "all",
      alt: "Trim Banking",
      title: "Trim Banking",
      desc: "Description",
    },
    {
      id: 8,
      img: eight,
      type: "all",
      alt: "SafeX",
      title: "SafeX",
      desc: "Description",
    },
    {
      id: 9,
      img: ninth,
      type: "all",
      alt: "Sparrow",
      title: "Sparrow",
      desc: "Description",
    },
    {
      id: 10,
      img: tenth,
      type: "all",
      alt: "KnowledgeX",
      title: "KnowledgeX",
      desc: "Description",
    },
    {
      id: 11,
      img: eleventh,
      type: "all",
      alt: "Diamond",
      title: "Diamond",
      desc: "Description",
    },
    {
      id: 12,
      img: twelfth,
      type: "all",
      alt: "Starshop",
      title: "Starshop",
      desc: "Description",
    },
  ];

  const portfolioList = data.map(
    (portfolio) => {
        return (
          <div className="portfolio-list" key={portfolio.id}>
            <img src={portfolio.img} alt={portfolio.alt} />
            <div className="cont">
              <div className="title">{portfolio.title}</div>
              <div className="desc">{portfolio.desc}</div>
            </div>
          </div>
        );
    }
  )

  return (
    <main className="main">
      <div className="one">
        <div className="green">XIII</div>
        <div>Let our work do the telling...</div>
      </div>
      <div className="two">
        <div className="filter">
          <div className="green">All</div>
          <div>Mobile</div>
          <div>Web</div>
          <div>Branding</div>
        </div>
        <div className="port">{portfolioList}</div>
      </div>
      <div className="three">
        <div className="ready">Ready for your next project...?</div>
        <div className="tell">Tell us more</div>
      </div>
    </main>
  );
};
