const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'john',
  age: 30,
  // Array
  hobbies: ['Sport', 'Cooking'],
  // Tuple(長さ固定の配列)
  role: [2, 'author']
};

// pushは許可されてしまう
// person.role.push('admin')

console.log(person.name);
