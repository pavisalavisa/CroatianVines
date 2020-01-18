import React from "react"
import styled from "styled-components"
import { FlexRow } from "../components/common/container"
import DefaultUserImage from "../images/defaultUserImage.svg"
import StyledButton from "../components/common/button"
import ResizableTextBox from "../components/common/resizableTextBox"

const CommentsContainer = styled.div`
    display:grid;
    grid-template-rows:1fr;
    grid-auto-rows:1fr; 
    grid-gap:2.5vh;
`

const CommentContentContainer = styled.div`
    flex-grow:1;
    margin-top:25px;
`

const SingleComment = ({ name, content, image }) => (
    <FlexRow alignItems="flex-start">
        <UserCommentImage alt="avatar" src={image} />
        <CommentContentContainer>
            <h4>{name}</h4>
            <p>{content}</p>
        </CommentContentContainer>
    </FlexRow>
)

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
            <UserCommentImage alt="avatar" src={DefaultUserImage} />
            <ResizableTextBox
                rows={1}
                placeholder="Add a public opinion"
                onChange={(e) => console.log('Changed')} />
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

export default ({ commentsList }) => (
    <div>
        <CommentEditor />
        <CommentsContainer>
            {commentsList.map((c, i) =>
                <SingleComment
                    key={i}
                    name={c.name}
                    content={c.content}
                    image={c.image} />)}
        </CommentsContainer>
    </div>
)

