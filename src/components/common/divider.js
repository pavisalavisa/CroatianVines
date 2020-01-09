import styled from "styled-components"

const Divider = styled.hr`
    margin: ${props => props.margin ? props.margin : "0 5%"};
    color: rgba(0,0,0,0.3);
    height: 1px;
`

export default Divider