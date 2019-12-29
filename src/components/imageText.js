import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { SubscriptParagraph } from "../components/common/paragraphs"

//This guy shouldn't know žžđabout frontmatter
const ImageText = ({ image, content, mirrored }) => {
  return mirrored ? (
    <ImageTextWrapper wrapReverse>
      <StyledImage fluid={image} />
      <Content {...content} />
    </ImageTextWrapper>
  ) : (
      <ImageTextWrapper>
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
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: ${props => (props.wrapReverse ? "wrap-reverse" : "wrap")};

  > *{
    flex-grow:1;
  }

  & > :first-child{
    margin: 50px 40px 50px 0;
  }
  & > :last-child{
    margin:50px 50px 0 40px;
  }
`

const StyledImage = styled(Image)`
  height: ${props => props.height || "400px"};
  width: ${props => props.width || "600px"};
  min-width: 300px;
  max-width:600px;
`

const ContentContainer = styled.div`
  min-width: 300px;
  max-width: 600px;
  height:400px;
`

export default ImageText
