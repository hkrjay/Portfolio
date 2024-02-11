import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc, lnk } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>Description</h1>
            <p>{disc}
            <a href={lnk} target='_blank'  rel="noreferrer">demo</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    // height: 10rem;
    // background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.50));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
            margin-left: 1rem;
        }
    
        p{
            padding-top: 10px;
            width: 90%;
            font-size: 0.8rem;
            margin-top: 0px;
            a{
                margin-left: 0.4rem;
                color: #ffb35d;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

`