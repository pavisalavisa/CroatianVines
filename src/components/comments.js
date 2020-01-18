import React from "react"
import { useState } from "react"
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

const CommentEditorContainer = styled.div`
    margin-bottom:5%;
`

const CommentEditor = ({ }) => {
    const [buttonsHidden, setButtonsHidden] = useState(true)
    const [textAreaText, setTextAreaText] = useState("")

    const handleCancelButtonClick = () => {
        setTextAreaText("")
        setButtonsHidden(true)
    }

    return (<CommentEditorContainer>
        <FlexRow alignItems="flex-start">
            <UserCommentImage alt="avatar" src={DefaultUserImage} />
            <ResizableTextBox
                value={textAreaText}
                rows={1}
                placeholder="Add a public opinion"
                onChange={(e) => setTextAreaText(e.target.value)}
                onFocus={() => setButtonsHidden(false)}
                onBlur={() => !!textAreaText ? null : setButtonsHidden(true)} />
        </FlexRow>
        <FlexRow justifyContent="flex-end" hidden={buttonsHidden}>
            <StyledButton
                margin="0 2.5% 0 0"
                secondary="true"
                onClick={handleCancelButtonClick}>
                Cancel
            </StyledButton>
            <StyledButton>
                Comment
            </StyledButton>
        </FlexRow>
    </CommentEditorContainer >)
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

