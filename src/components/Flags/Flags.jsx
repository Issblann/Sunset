import "./flags.css";

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
    // {
    //   id: "Argentina",
    //   nameFlag: "ARG",
    //   iconFlag: ARG,
    // },
    // {
    //   id: "ReinoUnido",
    //   nameFlag: "GBR",
    //   iconFlag: GBR,
    // },
    // {
    //   id: "Paisesbajos",
    //   nameFlag: "NLD",
    //   iconFlag: NLD,
    // },
    // {
    //   id: "Estadosunidos",
    //   nameFlag: "USA",
    //   iconFlag: USA,
    // },
    // {
    //   id: "Mexico",
    //   nameFlag: "MEX",
    //   iconFlag: MEX,
    // },
  ];
  return (
    <>
      <section className="container-flags">
        <div className="sub-container-flags">
          {FlagsData.map((flag) => {
            return (
              <div className="flag-and-description" key={flag.id}>
                <img src={flag.iconFlag} alt={flag.nameFlag} />
                <p>{flag.nameFlag}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Flags;
