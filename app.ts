let userInput: unknown;
let username: string;

// anyと違い型チェックの必要あり
if (typeof userInput === 'string') {
  username = userInput;
}

// never : 値を返すことが絶対にない
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('エラーが発生しました', 500);
