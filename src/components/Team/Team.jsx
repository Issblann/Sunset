import React from "react";
import "./team.css";
import imgSaraK from "../../images/team/pexels-andrea-piacquadio-712513.jpg";
import imgMichaelL from "../../images/team/pexels-hannah-nelson-1065084.jpg";
import imgJackM from "../../images/team/pexels-spencer-selover-428333.jpg";
import twitterIcon from "../../images/team/twitter-icon.svg";
import instagramIcon from "../../images/team/instagram-icon.svg";
const TeamSection = () => {
  const TeamData = [
    {
      img: imgSaraK,
      name: "Sara K",
      profession: "UX Designer",
    },
    {
      img: imgMichaelL,
      name: "Michael L",
      profession: "Lead Designer",
    },
    {
      img: imgJackM,
      name: "Jack M",
      profession: "Full Stack Developer",
    },
  ];
  return (
    <>
      <section className="team-section">
        <div className="container-team">
          <div className="container-title-paragraph">
            <h1>Meet our team</h1>
            <p>
              Get to know the faces behind the scenes and learn about the values
              that drive us.
            </p>
          </div>

          <div className="container-cards-team">
            {TeamData.map((person) => {
              return (
                <div className="card-team" key={person.name}>
                  <img
                    className="img-person"
                    src={person.img}
                    alt={person.img}
                  />
                  <div>
                    <h2>{person.name}</h2>
                    <p>{person.profession}</p>
                  </div>
                  <span className="barra-team"></span>
                  <div className="social-links-team">
                    <img src={twitterIcon} alt="twitter icon" />
                    <img src={instagramIcon} alt="instagram icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
