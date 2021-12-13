var userInput;
var username;
// anyと違い型チェックの必要あり
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('エラーが発生しました', 500);
