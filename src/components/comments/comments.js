import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { FlexRow } from "../common/container"
import CommentEditor from "./commentEditor"
import UserCommentImage from "./userCommentImage"
import FadeIn from "../common/animations/fadeIn"
import nanoid from "nanoid"

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

export default ({ commentsList }) => {
    const [comments, setComments] = useState(commentsList)

    const postCommentAction = (newComment) => {
        setComments(comment => ([newComment, ...comment]))
    }

    return (
        <div>
            <CommentEditor postCommentAction={postCommentAction} />
            <CommentsContainer>
                {comments.map((c) =>
                    <FadeIn duration="1s" delay="0.6s">
                        <SingleComment
                            key={nanoid}
                            name={c.name}
                            content={c.content}
                            image={c.image} />
                    </FadeIn>
                )}
            </CommentsContainer>
        </div>
    )
}

