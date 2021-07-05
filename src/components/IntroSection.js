import React from "react";
import styled from "styled-components";
// components
import Button from "./Button";
// images
import SunImg from "../media/images/sun.png";
import MoonRainImg from "../media/images/moon-rain.png";
import MoonRainCloudImg from "../media/images/moon-rain-cloud.png";
import RainCloudImg from "../media/images/rain-cloud.png";
import MoonCloudThunderImg from "../media/images/moon-cloud-thunder.png";
import ThunderCloudImg from "../media/images/thunder-cloud.png";
import SunCloudImg from "../media/images/sun-cloud.png";
import ThunderImg from "../media/images/thunder.png";
import StarImg from "../media/images/star.png";

const IntroSection = () => {
  return (
    <StyledIntro className="intro">
      <StyledContent className="styled-content">
        <h1>All the weather data you would ever need</h1>
        <p className="desc">
          Our image mission is to make quality climate data accessible to each
          individual on this planet. Regardless of where you reside on the
          planet or how dark a movement you require climate data for - we will
          give you as much applicable, nearby climate information as we can
          uncover.
        </p>
        <form action="#" className="styled-form">
          <input
            type="text"
            for="place"
            className="place"
            id="place"
            placeholder="Seach your place"
          />
          <Button content={"Search"} />
        </form>
      </StyledContent>
      <IntroImages className="intro-images">
        <img src={SunImg} alt="" />
        <img src={MoonRainImg} alt="" />
        <img src={ThunderCloudImg} alt="" />
        <img src={MoonRainCloudImg} alt="" />
        <img src={MoonCloudThunderImg} alt="" />
        <img src={StarImg} alt="" />
        <img src={ThunderImg} alt="" />
        <img src={SunCloudImg} alt="" />
        <img src={RainCloudImg} alt="" />
      </IntroImages>
    </StyledIntro>
  );
};
const StyledIntro = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 5rem;
  height: 50vh;
  margin: 2rem 0;
`;
const StyledContent = styled.div`
  flex: 1;
  text-align: left;
  h1 {
    line-height: 6rem;
  }
  .desc {
    margin-top: 3.6rem;
    opacity: 0.8;
    width: 85%;
  }
  .styled-form {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 6.4rem;
    input {
      padding: 1rem;
      font-family: var(--font);
      font-size: 1.6rem;
      font-weight: var(--medium);
      margin-right: 1.6rem;
      width: 100%;
      height: 5rem;
      border-radius: var(--border);
      background: #f1f1f1;
      border: 1px solid var(--main-color);
    }
    input:focus {
      background: #fff;
      border: 2px solid var(--main-color);
      outline: none;
    }
  }
`;

const IntroImages = styled.div`
  flex: 1;
  position: relative;
  img {
    position: absolute;
  }
  img:nth-child(1) {
    left: -10%;
  }
  img:nth-child(2) {
    left: 50%;
    transform: translateX(-50%);
  }
  img:nth-child(3) {
    right: 0%;
  }
  img:nth-child(4) {
    top: 35%;
    left: 25%;
  }
  img:nth-child(5) {
    top: 30%;
    left: 75%;
  }
  img:nth-child(6) {
    top: 60%;
  }
  img:nth-child(7) {
    top: 70%;
    left: 55%;
    transform: translateY(-50%);
  }
  img:nth-child(8) {
    top: 70%;
    right: 0;
    transform: translateY(-20%);
  }
  img:nth-child(9) {
    bottom: 0;
    left: 25%;
  }
`;

export default IntroSection;
