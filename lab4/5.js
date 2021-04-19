/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === '(' || str[i] === '<') {
            stack.push(str[i]);
        }
        if (str[i] === ']') {
            if (stack[stack.length - 1] !== '[') {
                return false;
            } else {
                stack.pop();
            }
        }
        if (str[i] === ')') {
            if (stack[stack.length - 1] !== '(') {
                return false;
            } else {
                stack.pop();
            }
        }
        if (str[i] === '>') {
            if (stack[stack.length - 1] !== '<') {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return true;
}

module.exports = checkBrackets;
