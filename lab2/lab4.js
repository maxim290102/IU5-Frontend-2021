
/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
let str1= "4 и -6, 2, 1, может 9, 63, -134 и 566]";
function getMinMax(str)
{
    let array = str.split(/[^-\d\.]/);
    let minI = array[0];
    let maxI = minI;
    for (let i = 0; i < array.length; i++)
    {
        let a = array[i];
        if (a < minI) minI = a;
        if (a > maxI) maxI = a;
    }
    document.writeln(array);
    return { min: minI, max: maxI };
}

document.writeln(getMinMax(str1));

/**
 * Напишите функцию multiplyArray(arr, n),
 * на вход подается массив arr, и число n
 * необходимо вернуть новый массив, в котором все числа в n раз больше исходного
 * в массиве могут быть не только числа, эти элементы должны соответствовать исходным (не числа не трогать)
 * Примеры:
 * [1, 2, 3, 'ddd', {min: 1}, 22, false], 2 -> [2, 4, 6, 'ddd', {min: 1}, 44, false]
 */
let n=6;
let arr=[1,2,3,4,5,6];
function multiplyArray(arr, n) {

    for (let i = 0; i < arr.length; i++)
    {
        if (typeof(arr[i]) === 'number')
            arr[i] = arr[i] * n;
    }
    return arr;
}
document.writeln(multiplyArray(arr,n));
/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */
let arr1=[2,3,1,2,1,2,2];
function prettySum(arr)
{
    let sum=0;
    for (let i=0; i<arr.length;i++)
    {
        if (i%2==0)
        {
            sum+=arr[i];
        }

    }
    return sum*arr[length];
}
document.writeln(prettySum(arr1));