import styled, { keyframes } from "styled-components"
import BaseAnimation from "./BaseAnimation"

const FadeInAnimation = keyframes`  
  from { 
    opacity: 0;
    transform: translateY(-20px);
 }
  to { 
    opacity: 1;
    transform: translateY(0);
 }
`

const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`

export default FadeIn
