import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const HeroImageWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background: rgba(91, 11, 11, 0.35)
    linear-gradient(
      360deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) ${props => (props.hideGradient ? "0" : "7.66%")}
    );

  &&& {
    margin: ${props => (props.margin ? props.margin : 0)};
    width: 100%;
  }
`

const Overlay = styled.div`
  width: 90%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || "100vh"};

  & > img {
    object-fit: ${props => props.fit || "cover"} !important;
    object-position: ${props => props.position || "50% 50%"} !important;
  }
`

const HeroImage = props => (
  <HeroImageWrapper {...props}>
    <BackgroundImage {...props} />
    <Overlay>{props.children}</Overlay>
  </HeroImageWrapper>
)

export default HeroImage
