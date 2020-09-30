type TodoItem = {
  title: string;
  finished: boolean;
};

export interface BasicState {
  breadcrumb: string[];
  loggedIn: boolean;
  todos: TodoItem[];
}
