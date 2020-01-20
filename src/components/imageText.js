import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import {
  SubscriptParagraph,
  ParagraphWithLineBreaks,
} from "../components/common/paragraphs"

const ContentContainer = styled.div`
  @media screen and (max-width: 1000px) {
    grid-row-start: ${props => (props.wrapReverse ? 1 : 2)};
  }
`

const SubscriptContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`

const Content = ({ wrapReverse, contents }) => {
  const { title, content, subscript } = contents
  return (
    <ContentContainer wrapReverse>
      {title ? <h1>{title}</h1> : null}
      <ParagraphWithLineBreaks string={content} />
      <SubscriptContainer>
        <SubscriptParagraph>{subscript}</SubscriptParagraph>
      </SubscriptContainer>
    </ContentContainer>
  )
}

const ImageTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 7.5vw;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
  }
`

export default ({ image, contents, mirrored, imageTextRef }) => {
  return mirrored ? (
    <ImageTextWrapper ref={imageTextRef}>
      <Image fluid={image} />
      <Content wrapReverse contents={contents} />
    </ImageTextWrapper>
  ) : (
    <ImageTextWrapper ref={imageTextRef}>
      <Content contents={contents} />
      <Image fluid={image} />
    </ImageTextWrapper>
  )
}
