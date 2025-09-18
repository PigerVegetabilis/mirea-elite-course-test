/*
# Задание 4
Дано две строки ```s``` и ```t```, вернуть ```true``` если ```t``` является анаграммой ```s```, и ```false``` в противном случае.
*/
function main(s, t){
    if (s.length !== t.length) return false;
    result = true;
    s.split('').forEach(e => {
        if (s.split(e).length - 1 !== t.split(e).length - 1)
            result = false;
    });
    return result;
}

console.log(main('rat', 'car'))