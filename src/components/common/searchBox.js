import React from "react"
import styled from "styled-components"
import { useState, useRef, useLayoutEffect } from "react"
import Input from "./input"
import searchButton from "../../images/searchButton.svg"

const SerachIcon = styled.img`
  width: auto;
  height: ${props => (props.height ? props.height : "auto")}px;
  margin: 0;
  border-radius: 6px;
  margin-left: ${props => (props.height ? -props.height - 10 : "0")}px;
  z-index: 1;
`

const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  align-items: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px #5b0b0b;
  }
`

const PaddedInput = styled(Input)`
  padding-right: ${props =>
    props.paddingRight ? props.paddingRight + 5 : 0}px;
`

const SearchBox = ({ hint, onSearch, onFocus }) => {
  const [inputValue, setInputValue] = useState("")
  const [inputHeight, setInputHeight] = useState()

  const inputRef = useRef()

  useLayoutEffect(() => {
    const handleResize = () => {
      const { offsetHeight: containerHeight } = inputRef.current

      setInputHeight(containerHeight)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [inputRef])

  const handleInputChange = event => {
    const target = event.target
    const value = target.value

    setInputValue(value)

    onSearch(value)
  }

  return (
    <SearchBoxContainer>
      <PaddedInput
        ref={inputRef}
        type="text"
        placeholder={hint}
        value={inputValue}
        onChange={handleInputChange}
        fontSize="200%"
        width="60%"
        minWidth="325px"
        onFocus={onFocus}
        paddingRight={inputHeight}
      />
      <SerachIcon src={searchButton} height={inputHeight - 20} />
    </SearchBoxContainer>
  )
}

export default SearchBox
