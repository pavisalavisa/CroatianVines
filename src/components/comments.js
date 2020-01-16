import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import ImageText from "../components/imageText"
import Divider from "../components/common/divider"
import HeroImage from "../components/heroImage"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { StyledH1 } from "../components/common/headers"
import { FlexRow } from "../components/common/container"
import { defaultUserImage } from "../images/defaultUserImage.svg"
import StyledButton from "../components/common/button"
import ResizableTextBox from "../components/common/resizableTextBox"

const CommentsContainer = styled.div`
    display:grid;
    grid-template-rows:repeat(auto-fit, 125px);
    grid-gap:2.5%;
`

const SingleComment = styled.div``

const UserCommentImage = styled.img`
    border-radius:50%;
    height:75px;
    width:75px;
    border:1px solid #333333;
    margin:25px 25px 0 0;
`

const CommentEditor = ({ }) => {
    return (<div>
        <FlexRow alignItems="flex-start">
            <UserCommentImage alt="avatar" src={defaultUserImage} />
            <ResizableTextBox rows={1} placeholder="Add a public opinion" />
        </FlexRow>
        <FlexRow justifyContent="flex-end">
            <StyledButton margin="0 2.5% 0 0" secondary>
                Cancel
            </StyledButton>
            <StyledButton>
                Comment
            </StyledButton>
        </FlexRow>

    </div>)
}

export default ({ commentsList }) => {

    return (
        <>
            <CommentEditor />
            <CommentsContainer>
                {commentsList.map((c, i) =>
                    <SingleComment
                        key={i}
                        name={c.name}
                        content={c.content}
                        image={c.image} />)}
            </CommentsContainer>
        </>)

}