export interface Todo {
  id: string,
  todo: string,
}

export interface TodoState {
  todos : Todo[]
}

export interface AddTodoPayload {
  todo: string,
}