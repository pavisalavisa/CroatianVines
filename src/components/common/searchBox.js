import React from "react"
import styled from "styled-components"
import { useState } from "react"

const SearchBoxContainer = styled.div`
    display:flex;
    justify-content:center;
    padding: 0;
`

const StyledInput = styled.input`
    padding:0.5rem 1.25rem;
    border-radius:6px;
    position:relative;
    border: 1px solid rgba(0,0,0,0.3);

    width:${props => props.width ? props.width : "auto"};
    min-width:${props => props.minWidth ? props.minWidth : null};
    font-size:${props => props.fontSize ? props.fontSize : "medium"};

    &:focus{
        outline:none;
        box-shadow:0 0 3px #5B0B0B;    
    }
`

const SearchBox = ({ hint, onSearch, onFocus }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.value

        setInputValue(value)

        onSearch(value)
    }

    return <SearchBoxContainer>
        <StyledInput type="text"
            placeholder={hint}
            value={inputValue}
            onChange={handleInputChange}
            fontSize="xx-large"
            width="45%"
            minWidth="440px"
            onFocus={onFocus} />
    </SearchBoxContainer>
}

export default SearchBox