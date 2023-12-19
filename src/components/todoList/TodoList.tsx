import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import Input from "components/input";
import Button from "components/button";
import { ButtonContainer, CreatedListContainer, InputContainer, List, TodoListWrapper } from "./styles";
import { todosActions } from "store/redux/todoList/todoListSlice";
import { todosState } from "store/redux/todoList/selectors";
import { Todo } from 'store/redux/todoList/types'
import { v4 } from "uuid";

function TodoList() {
  const dispatch = useDispatch()
  const todoList = useSelector(todosState)

  const formik = useFormik({
    initialValues: {
      todo: "",      
    },
    onSubmit: (values) => {
      dispatch(todosActions.addTodo(values))     
    },
  })
  
  return (
    <TodoListWrapper>
      <InputContainer onSubmit={formik.handleSubmit}>
        <Input
          label="Input event"
          placeholder="Input event"
          name="todo"
          value={formik.values.todo}
          onChange={formik.handleChange}
        />
        <ButtonContainer>
          <Button name="Create event" type="submit" />
        </ButtonContainer>
      </InputContainer>
      <CreatedListContainer>
        <List>
          {todoList.todos.map((event: Todo) => (
            <li
              key={v4()}
              onClick={() => {
                dispatch(todosActions.deleteTodo(event.id))
              }}
            >
              {event.todo}
            </li>
          ))}
        </List>
      </CreatedListContainer>
      <ButtonContainer>
        <Button name="Clear all" type="button" onClick={() => dispatch(todosActions.deleteAllTodos())} />
      </ButtonContainer>
    </TodoListWrapper>
  )
}

export default TodoList;