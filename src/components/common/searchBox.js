import React from "react"
import styled from "styled-components"
import { useState } from "react"
import Input from "./input"

const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`

const SearchBox = ({ hint, onSearch, onFocus }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = event => {
    const target = event.target
    const value = target.value

    setInputValue(value)

    onSearch(value)
  }

  return (
    <SearchBoxContainer>
      <Input
        type="text"
        placeholder={hint}
        value={inputValue}
        onChange={handleInputChange}
        fontSize="200%"
        width="60%"
        minWidth="325px"
        onFocus={onFocus}
      />
    </SearchBoxContainer>
  )
}

export default SearchBox
