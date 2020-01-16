import React from "react"
import styled from "styled-components"
import TextareaAutosize from 'react-autosize-textarea';


const StyledTextArea = styled(TextareaAutosize)`
    padding:0.5rem;
    resize:none;
    overflow-y:hidden;
    position:relative;
    border:none;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    outline:none;
    flex-grow:1;
    font-size:${props => props.fontSize ? props.fontSize : "100%"};
    margin: 25px 0 25px 0;
    &:focus{
        border-bottom: 2px solid #333333;
    }
`

export default (props) => {

    return (<StyledTextArea
        rows={1}
        {...props} />)
}