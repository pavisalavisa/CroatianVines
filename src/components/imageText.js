import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

//This guy shouldn't know about frontmatter
const ImageText = ({ image, content, mirrored }) => {
  return mirrored ? (
    <ImageTextWrapper>
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
  align-items: flex-start;
  margin: 2rem;
  flex-flow: row wrap;

  > * {
    margin: 0 2vw 5vh 2vw;
  }
`

const StyledImage = styled(Image)`
  height: ${props => props.height || "30vh"};
  width: ${props => props.width || "40rem"};
  min-width: 10rem;
`

const ContentContainer = styled.div`
  min-width: 10rem;
  width: 40rem;
`

export default ImageText
