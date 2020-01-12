import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { SubscriptParagraph } from "../components/common/paragraphs"


const ImageText = ({ image, contents, mirrored, imageTextRef }) => {
  return mirrored ? (
    <ImageTextWrapper wrapReverse ref={imageTextRef}>
      <StyledImage fluid={image} />
      <Content contents={contents} />
    </ImageTextWrapper>
  ) : (
      <ImageTextWrapper ref={imageTextRef}>
        <Content contents={contents} />
        <StyledImage fluid={image} />
      </ImageTextWrapper>
    )
}

const Content = ({ contents }) => {
  const { title, content, subscript } = contents

  return (
    <ContentContainer>
      {title ? <h1>{title}</h1> : null}
      <p>{content}</p>
      <SubscriptContainer>
        <SubscriptParagraph>{subscript}</SubscriptParagraph>
      </SubscriptContainer>
    </ContentContainer>
  )
}

const SubscriptContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.3);
`

const ImageTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: ${props => (props.wrapReverse ? "wrap-reverse" : "wrap")};

  > *{
    flex-grow:1;
  }

  & > :first-child{
    margin-right:2.5%;
  }
  & > :last-child{
    margin-left:2.5%;
  }
`

const StyledImage = styled(Image)`
  height: ${props => props.height || "400px"};
  width:45%;
  min-width:400px;
`

const ContentContainer = styled.div`
  min-width: 400px;
  width: 45%;
  height:400px;
`

export default ImageText
