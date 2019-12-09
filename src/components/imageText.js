import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

//This guy shouldn't know about frontmatter
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

const Content = ({ frontmatter, html }) => {
  console.log(frontmatter)
  console.log(html)
  return (
    <ContentContainer>
      <h1>{frontmatter.title}</h1>
      <p>{html}</p>
      <p>{frontmatter.subscript}</p>
    </ContentContainer>
  )
}

const ImageTextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5%;
  flex-wrap: ${props => props.wrapReverse ? "wrap-reverse" : "wrap"};

  > * {
    margin: 0 2vw 5vh 2vw;
    flex-grow:1;
  }
`

const StyledImage = styled(Image)`
  height: ${props => props.height || "40vh"};
  width: ${props => props.width || "40%"};
  min-width: 300px;
`

const ContentContainer = styled.div`
  min-width: 300px;
  width: 40%;
`

export default ImageText
