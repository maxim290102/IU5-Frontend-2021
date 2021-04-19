/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let newStr=str.split('').reverse().join('');
    if (newStr===str)
        return true;
    else return false;

}

module.exports = isPalindrome;
