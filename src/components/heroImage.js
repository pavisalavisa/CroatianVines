import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const HeroImage = props => (
  <HeroImageWrapper>
    <BackgroundImage {...props} />
    <Overlay>{props.children}</Overlay>
  </HeroImageWrapper>
)

const HeroImageWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0vw;
  background: linear-gradient(360deg, #ffffff 0%, rgba(255, 255, 255, 0) 7.66%);
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

  &>img{
      object-fit:${props => props.fit || "cover"} !important;
      object-position:${props => props.position || "50% 50%"} !important;
      font-family: 'object-fit: ${props => props.fit || "cover"} !important; object-position:${props =>  props.position || "50% 50%"} !important;'}
`

export default HeroImage
