import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { SubscriptParagraph } from "../components/common/paragraphs"


const ImageText = ({ image, contents, mirrored, imageTextRef }) => {
  return mirrored ? (
    <ImageTextWrapper wrapReverse ref={imageTextRef}>
      <Image fluid={image} />
      <Content contents={contents} />
    </ImageTextWrapper>
  ) : (
      <ImageTextWrapper ref={imageTextRef}>
        <Content contents={contents} />
        <Image fluid={image} />
      </ImageTextWrapper>
    )
}

const Content = ({ contents }) => {
  const { title, content, subscript } = contents

  return (
    <div>
      {title ? <h1>{title}</h1> : null}
      <p>{content}</p>
      <SubscriptContainer>
        <SubscriptParagraph>{subscript}</SubscriptParagraph>
      </SubscriptContainer>
    </div>
  )
}

const SubscriptContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.3);
`

const ImageTextWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
grid-gap:5%;
`

export default ImageText
