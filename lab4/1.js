/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr)
{
    let manArr = new Map();
    if (!arr || arr.length <= 1) {
        return arr;
    }
    let firstElemSort = arr[0].toLowerCase().split('').sort().join('');
    manArr[firstElemSort] = [];
    manArr[firstElemSort].push(arr[0]);
    for (let i = 1; i < arr.length; i++)
        let elemSort = arr[i].toLowerCase().split('').sort().join('');
        if (typeof manArr[elemSort] === 'object') {
            manArr[elemSort].push(arr[i]);
        } else {
            manArr[elemSort] = [];
            manArr[elemSort].push(arr[i]);
        }
    }
    return Object.values(manArr);
}

module.exports = getAnagramms;
