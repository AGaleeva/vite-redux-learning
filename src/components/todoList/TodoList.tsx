import Input from "components/input";
import Button from "components/button";
import { ButtonContainer, CreatedListContainer, InputContainer, TodoListWrapper } from "./styles";

function TodoList() {
  return (
    <TodoListWrapper>
      <InputContainer>
        <Input
          label="Input event"
          placeholder="Input event"
          value=""
          onChange={() => {}}
        />
      </InputContainer>
      <ButtonContainer>
        <Button name="Create event" type="button" onClick={() => {}} />
      </ButtonContainer>
      <CreatedListContainer></CreatedListContainer>
    </TodoListWrapper>
  )
}

export default TodoList;