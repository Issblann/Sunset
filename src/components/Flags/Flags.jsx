import "./flags.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AU from "../../images/flags/AU.svg";
import JPN from "../../images/flags/JP.svg";
import COL from "../../images/flags/CO.svg";
import CAN from "../../images/flags/CA.svg";
import FRA from "../../images/flags/FR.svg";
import ARG from "../../images/flags/AR.svg";
import GBR from "../../images/flags/GB.svg";
import NLD from "../../images/flags/NL.svg";
import USA from "../../images/flags/US.svg";
import MEX from "../../images/flags/MX.svg";
const Flags = () => {
  const FlagsData = [
    {
      id: "Australia",
      nameFlag: "AUS",
      iconFlag: AU,
    },
    {
      id: "Japon",
      nameFlag: "JPN",
      iconFlag: JPN,
    },
    {
      id: "Colombia",
      nameFlag: "COL",
      iconFlag: COL,
    },
    {
      id: "Canada",
      nameFlag: "CAN",
      iconFlag: CAN,
    },
    {
      id: "Francia",
      nameFlag: "FRA",
      iconFlag: FRA,
    },
    {
      id: "Argentina",
      nameFlag: "ARG",
      iconFlag: ARG,
    },
    {
      id: "ReinoUnido",
      nameFlag: "GBR",
      iconFlag: GBR,
    },
    {
      id: "Paisesbajos",
      nameFlag: "NLD",
      iconFlag: NLD,
    },
    {
      id: "Estadosunidos",
      nameFlag: "USA",
      iconFlag: USA,
    },
    {
      id: "Mexico",
      nameFlag: "MEX",
      iconFlag: MEX,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 2500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="container-flags">
        <Slider className="sub-container-flags" {...settings}>
          {FlagsData.map((flag) => {
            return (
              <div className="flag-and-description" key={flag.id}>
                <img src={flag.iconFlag} alt={flag.nameFlag} />
                <p>{flag.nameFlag}</p>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Flags;
