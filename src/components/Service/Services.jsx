import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { IoGitNetworkOutline } from "react-icons/io5";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down" triggerOnce='true'>
        <h4>
          My <span className="orange-400">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left" triggerOnce='true'>
          <Card
            Icon={MdDesignServices}
            title={"Wordpress designer"}
            disc={`Proficient in custom theme development, plugin integration, and site optimization, I bring a wealth of experience to every project, showcasing a track record of transforming client visions into robust online experiences.`}
          />
        </Slide>
        <Slide direction="up" triggerOnce='true'>
          <Card
            Icon={FiCodesandbox}
            title={"Web Development"}
            disc={`Specialize in crafting dynamic React.js and Next.js applications, seamlessly blending design and functionality. Ability to create responsive, high-performance digital experiences & transform ideas into engaging web solutions.`}
          />
        </Slide>
        <Slide direction="right" triggerOnce='true'>
          <Card
            Icon={IoGitNetworkOutline}
            title={"Networking"}
            disc={`With a proven track record of building scalable infrastructures, my portfolio reflects a commitment to creating reliable and efficient networking solutions that meet the ever-evolving demands of the digital landscape.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
