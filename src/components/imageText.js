import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { SubscriptParagraph } from "../components/common/paragraphs"

//This guy shouldn't know žžđabout frontmatter
const ImageText = ({ image, content, mirrored, imageTextRef }) => {
  return mirrored ? (
    <ImageTextWrapper wrapReverse ref={imageTextRef}>
      <StyledImage fluid={image} />
      <Content {...content} />
    </ImageTextWrapper>
  ) : (
      <ImageTextWrapper ref={imageTextRef}>
        <Content {...content} />
        <StyledImage fluid={image} />
      </ImageTextWrapper>
    )
}

const Content = ({ frontmatter }) => {
  return (
    <ContentContainer>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.content}</p>
      <SubscriptContainer>
        <SubscriptParagraph>{frontmatter.subscript}</SubscriptParagraph>
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
