/*
# Задание 3
Дан целочисленный массив ```prices``` где ```prices[i]``` это цена некоторой акции на i-й день.

Вам нужно максимизировать прибыль, выбрав **один день** чтобы купить акции и **другой день в будущем** чтобы продать акции.

Верните *максимальную возможную прибыль от транзакции*. Если невозможно получить прибыль, верните ```0```.
*/
function main(prices){
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++){
        result = Math.max(result, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return result;
}

console.log(main([7,6,4,3,1]))