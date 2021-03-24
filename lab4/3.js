/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str)
{
    if(str.length < 2)
    {
        return str;
    }
    let k = 1;
    let result = str[0];
    for(let i = 1; i < str.length; i++)
    {
        if(str[i] === str[i - 1])
        {
            k++;
        }
        else
            {
            if(k > 1)
            {
                result = result.concat(String(k));
            }
            result = result.concat(str[i]);
          k = 1;
        }
    }
    if(k > 1)
    {
        return result.concat(String(k));
    }
    return result;
}
module.exports = rle;
