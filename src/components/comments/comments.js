import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { FlexRow } from "../common/container"
import CommentEditor from "./commentEditor"
import UserCommentImage from "./userCommentImage"
import FadeIn from "../common/animations/fadeIn"

const CommentsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-gap: 2.5vh;
`

const CommentContentContainer = styled.div`
  flex-grow: 1;
  margin-top: 25px;
`

const SingleComment = ({ name, content, image }) => (
  <FlexRow alignItems="flex-start" flexWrap="nowrap">
    <UserCommentImage alt="avatar" src={image} />
    <CommentContentContainer>
      <h4>{name}</h4>
      <p>{content}</p>
    </CommentContentContainer>
  </FlexRow>
)

export default ({ commentsList }) => {
  const [comments, setComments] = useState(commentsList)

  return (
    <>
      <CommentEditor
        authenticationRequired
        postCommentAction={newComment =>
          setComments(comment => [newComment, ...comment])
        }
      />
      <CommentsContainer>
        {comments.map(c => (
          <FadeIn key={c.id} duration="0.8s" delay="0.1s">
            <SingleComment name={c.name} content={c.content} image={c.image} />
          </FadeIn>
        ))}
      </CommentsContainer>
    </>
  )
}
