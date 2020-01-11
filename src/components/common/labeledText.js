import React from "react";
import styled from "styled-components"

const LabeledText = ({ margin, width, text, textRef }) =>
    (
        <TextContainer ref={textRef} margin={margin} width={width}>
            <StyledText>
                {text}
            </StyledText>
        </TextContainer>
    )

const TextContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:${props => props.width || "auto"};
    padding: 0.75rem 0;
    margin:${props => props.margin || 0};
`

const StyledText = styled.h1`
    color:white;
    margin:0;
`

export default LabeledText;