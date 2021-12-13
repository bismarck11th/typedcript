"use strict";
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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'john',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
