// storing arrays in a variable
var todos = ['item 1', 'item 2', 'item 3'];
console.log('My todos:', todos);

// adding another item to todos
todos.push('item 4');
console.log(todos);

// accessing a specific item in array
console.log(todos[0]);
console.log(todos[1]);
console.log(todos[2]);
console.log(todos[3]);

// changing specific item in array 
todos[0] = 'item 1 updated';
console.log(todos[0]);

// deleting a specific item in the  and replacing it with a new todo
todos.splice(0, 1, 'new todo');
console.log(todos);


