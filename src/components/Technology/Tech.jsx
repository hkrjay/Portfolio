import React from 'react'
import styled from 'styled-components'
import { Slide } from "react-awesome-reveal";
import { AiFillHtml5 } from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {FaBootstrap, FaWordpress, FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {TbBrandJavascript, TbBrandNextjs} from 'react-icons/tb'

const Technology = () => {
    return (
        <Container id='tech'>
            <Slide direction="left" triggerOnce='true'>
                <span className="orange-400">Technologies</span>
                <h1>What I Learn</h1>
            </Slide>
            <Tech>
                <Slide direction='left' triggerOnce='true'>
                    <div>
                        <AiFillHtml5 size={50} className="orange-400" />
                        <h3>HTML 5</h3>
                    </div>
                    <div>
                        <IoLogoCss3 size={50} className="orange-400" />
                        <h3>CSS</h3>
                    </div>
                    <div>
                        <FaBootstrap size={50} className="orange-400" />
                        <h3>Bootstrap</h3>
                    </div>
                    <div>
                        <SiTailwindcss size={50} className="orange-400" />
                        <h3>Tailwind Css</h3>
                    </div>
                </Slide>
            </Tech>
            <Tech>
                <Slide direction='right' triggerOnce='true'>
                    <div>
                        <TbBrandJavascript size={50} className="orange-400"/>
                        <h3>Javascript</h3>
                    </div>
                    <div>
                        <FaWordpress size={50} className="orange-400" />
                        <h3>Wordpress</h3>
                    </div>
                    <div>
                        <FaReact size={50} className="orange-400" />
                        <h3>React.js</h3>
                    </div>
                    <div>
                        <TbBrandNextjs size={50} className="orange-400"/>
                        <h3>Next.js</h3>
                    </div>
                </Slide>
            </Tech>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Tech = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 3rem;
    gap: 1rem;
    text-align: center;
    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 2rem;
    }
`

export default Technology;
