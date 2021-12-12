// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'john',
//   age: 30,
//   // Array
//   hobbies: ['Sport', 'Cooking'],
//   // Tuple(長さ固定の配列)
//   role: [2, 'author']
// };

// pushは許可されてしまう
// person.role.push('admin')

// 割与えられる数値は自動でインクリメント（文字列もOK）
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200
}

const person = {
  name: 'john',
  age: 30,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN
};
