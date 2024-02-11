import React from "react";
import styled from "styled-components";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { GiEarthAmerica } from "react-icons/gi";
// import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left" triggerOnce='true'>
        <Texts className="text-center">
          <h4>
            Hello <span className="orange-400">I'am</span>
          </h4>
          <h1 className="orange-400">Jigyanshu Gupta</h1>
          <h3>Frontend Developer</h3>

          <h4>Objective:</h4>
          <p>
            Results-oriented front-end developer with 2 years of experience in designing and implementing innovative websolutions. Proficient in translating complex design concepts into clean, maintainable, and scalable code. Adept atcollaborating with cross-functional teams to deliver high-quality user experiences. Skilled in utilizing the latestfront-end technologies and frameworks to create responsive and visually appealing interfaces. Proven track recordof meeting project deadlines and exceeding client expectations. Strong problem-solving abilities and a commitmentto staying current with industry trends. Seeking to contribute expertise in front-end development to a dynamicand forward-thinking team.
          </p>
          <div>
            <a href="#footer">Contact Me</a>
          </div>
          {/* <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social> */}
        </Texts>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  text-align: center;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    margin: 10px 0px;
  }
  p {
    font-weight: 300;
    line-height: 1.7;
  }

  div{
    margin-top: 3rem;
  }

  a {
    text-decoration: none;
    padding: 0.7rem 2rem;
    background-color: #ffb35d;
    border: none;
    color: #191923;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px rgb(255 179 93 / 20%));
    :hover {
      filter: drop-shadow(0px 10px 10px rgb(255 179 93 / 50%));
    }
  }
`;
// const Social = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   p {
//     font-size: 0.9rem;
//     @media (max-width: 690px) {
//       font-size: 0.7rem;
//     }
//   }

//   .social-icons {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     span {
//       width: 2.3rem;
//       height: 2rem;
//       clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
//       background-color: #01be96;
//       position: relative;
//       transition: transform 400ms ease-in-out;
//       :hover {
//         transform: rotate(360deg);
//       }
//     }

//     a {
//       color: #fff;
//       position: absolute;
//       top: 55%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }
//   }
// `;
// const Profile = styled.div`
//   img {
//     width: 25rem;
//     filter: drop-shadow(0px 10px 10px #01be9570);
//     transition: transform 400ms ease-in-out;
//     @media (max-width: 790px) {
//       width: 20rem;
//     }

//     @media (max-width: 660px) {
//       width: 18rem;
//     }

//     @media (max-width: 640px) {
//       width: 100%;
//     }
//   }

//   :hover img {
//     transform: translateY(-10px);
//   }
// `;
