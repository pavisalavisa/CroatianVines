import styled, { css } from "styled-components"

export const FlexRow = styled.div`
  display: flex;
  align-items:${props => props.alignItems ? props.alignItems : "center"};
  justify-content:${props => props.justifyContent ? props.justifyContent : 'space-between'};
  flex-wrap:${props => props.flexWrap ? props.flexWrap : "wrap"};
`

export const underlinedContainerStyle = css`
  display: inline-block;
  vertical-align:middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before{
    content:"";
    position:absolute;
    z-index:-1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #5B0B0B;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before, &:focus:before, &:active:before{
    left:0;
    right:0;
  }
`

export const hoverAnimationStyle = css`
    display: inline-block;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover, &:focus, &:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`

export default FlexRow;