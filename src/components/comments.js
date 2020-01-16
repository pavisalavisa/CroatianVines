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

const CommentInput = styled.input`
    padding:0.5rem 1.25rem;
    position:relative;
    border:none;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    outline:none;
    flex-grow:1;
    font-size:${props => props.fontSize ? props.fontSize : "100%"};
    margin-top:25px;
    &:focus{
        border-bottom: 2px solid #333333;
    }
`

const CommentEditor = ({ }) => {
    return (<div>
        <FlexRow alignItems="flex-start">
            <UserCommentImage alt="avatar" src={defaultUserImage} />
            <CommentInput placeholder="Add a public opinion" />
        </FlexRow>
        <FlexRow justifyContent="flex-end">
            <StyledButton margin="0 2.5% 0 0" primary>
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