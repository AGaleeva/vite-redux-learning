import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
// import { useState, ChangeEvent } from 'react'; - для примера контроля инпута через useState

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

  // const [todoValue, setTodoValue] = useState<string>('')

  const formik = useFormik({
    initialValues: {
      todo: "",      
    },
    onSubmit: (values) => {
      // if(!formik.values.todo)
      if (values.todo.trim().length === 0) {
      alert("Please enter some data");
      return;
    } 
      dispatch(todosActions.addTodo(values.todo))     
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

   {/* контроль через useState */}
        {/* <Input
          label="Input event"
          placeholder="Input event"
          // name="todo"
          value={todoValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTodoValue(event.target.value)
          } }

      дальше кнопке добавить на событие onClick dispatch action  
        /> */}

      <CreatedListContainer>
        <List>
          {todoList.todos.map((event: Todo, index: number) => (
            <li
              key={event.id}
              onClick={() => {
                dispatch(todosActions.deleteTodo(event.id))
              }}
            >              
              {`${index + 1}. ${event.todo}`} 
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