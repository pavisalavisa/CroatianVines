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
  align-items: flex-start;
  flex-wrap: ${props => (props.wrapReverse ? "wrap-reverse" : "wrap")};

  > *{
    flex-grow:1;
  }
  & > :first-child{
    margin-right:5%;
  }
`

const StyledImage = styled(Image)`
  width:40%;
  min-width:300px;
`

const ContentContainer = styled.div`
  width: 40%;
  min-width: 300px;
`

export default ImageText
