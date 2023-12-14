import { useState, ChangeEvent, MouseEvent } from "react"

import { Homework29Wrapper, FormContainer } from "./styles"

import Input from "components/input"
import Button from "components/button"


function Homework29() {
  const [inputValue, setInputValue] = useState<string>("")
  const [text, setText] = useState<string | undefined>(undefined)

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const showText = (event: MouseEvent) => {
    // предотвращаем дефолтное поведение элемента (если кнопка типа submit, то страница будет все время перегружаться)
    event.preventDefault()
    if (inputValue.length === 0) {
      alert("Input some symbols")
      return
    }
    setText(inputValue)
  }

  return (
    <Homework29Wrapper>
      <FormContainer>
        <Input
          onChange={onChangeInputValue}
          value={inputValue}
          placeholder="Enter value"
          label="Input"
        />
        <Button onClick={(event) => showText(event)} type="button" name="Show text" />
        {text && <h2>{text}</h2>}
      </FormContainer>
    </Homework29Wrapper>
  )
}

export default Homework29
