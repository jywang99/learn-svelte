// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
type TodoType = {
  id: string;
  description: string;
  done: boolean;
}

const db = new Map<string, TodoType[]>();

export function getTodos(userid: string) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid) as TodoType[];
}

export function createTodo(userid: string, description: string) {
  if (description === '') {
    throw new Error('todo must have a description');
  }

	const todos = db.get(userid);
  if (todos && todos.find((todo) => todo.description === description)) {
    throw new Error('todos must be unique');
  }

  const newTodo = {
    id: crypto.randomUUID(),
    description,
    done: false
  }
  if (!todos) {
    db.set(userid, [newTodo]);
    return;
  }
	todos.push(newTodo);
}

export function deleteTodo(userid: string, todoid: string) {
	const todos = db.get(userid);
  if (!todos) {
    return;
  }

	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

export function toggleTodo(userid: string, id: string, done: boolean) {
	const todos = db.get(userid);
  if (!todos) {
    return;
  }
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return;
  }
  todo.done = done;
}

