import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdAccountBox, MdAlternateEmail } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { HiOutlineMailOpen } from "react-icons/hi";
// import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
// import { BsFacebook, BsSlack } from "react-icons/bs";
// import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import { TbMessage } from "react-icons/tb";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const form = useRef();
  const [showArrowUp, setShowArrowUp] = useState(false)

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Adjust the value (e.g., 100) based on when you want to show/hide the arrow
      setShowArrowUp(scrollTop > 350);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gx3pd8f', 'template_jxyoviy', form.current, 'eNLgFIq0RehkxaDA0')
      .then((result) => {
        if (result.text === 'OK') {
          toast.success("Your message has been submitted. I will contact you soon!", {
            theme: "dark",
            progressStyle: { background: '#ffb35d' },
          })
        }
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1} triggerOnce='true'>
          <h1>Contact Me</h1>
        </Slide>
        <ToastContainer style={{ width: "auto" }} />
        {/* <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
          </Slide>
        </div> */}
        {/* <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">+47 333 78 901</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">miladamiri@gmail.com</a>
            </Slide>
          </div>
        </div> */}
        {/* <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="/">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsSlack />
                </a>
              </span>
            </Zoom>
          </div>
        </div> */}
        <ArrowUp onClick={scrollUp} style={{ display: showArrowUp ? "flex" : "none" }}>
          <AiOutlineArrowUp color="#000" />
        </ArrowUp>
      </Profile>
      <Slide direction="right" triggerOnce='true'>
        <Form>
          <form ref={form} onSubmit={sendEmail}>
            <div className="email">
              <span>
                <MdAccountBox />
              </span>
              <input type="text" name="user_name" placeholder="Name..." required />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" name="user_email" placeholder="Email..." required />
            </div>
            <div className="email">
              <span>
                <TbMessage />
              </span>
              <textarea name="message" placeholder="Message..." required />
            </div>
            <input type="submit" value="Send" />
          </form>
        </Form>
      </Slide>
      {/* <form ref={contactForm} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 1rem;
  position: relative;
  padding: 2rem 0;
  width: 50%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  text-align: center;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #ffb35d;
  position: fixed;
  right: 50px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  // margin-top: 2rem;
  z-index: 99999;
  @media (max-width: 650px) {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    text-align: center;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    input[type=submit] {
      width: 5rem;
      height: 1.8rem;
      background-color: #ffb35d;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 10px 10px rgb(255 179 93 / 10%));
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 10px 10px rgb(255 179 93 / 20%));
      }
    }
  }
`;
