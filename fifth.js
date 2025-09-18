/*
# Задание 5
Есть класс ```RecentCounter```, который считает количество недавних запросов в течение конкретного промежутка времени.

Реализуйте класс ```RecentCounter```:
* ```RecentCounter()``` Инициализирует счетчик с 0 недавних запросов.
* ```int ping(int t)``` Добавляет новый запрос в момент времени ```t```, где ```t``` представляет некоторое время в миллисекундах, и возвращает количество запросов, которые случились в предыдущие ```3000``` миллисекунд (включая новый запрос). Конкретно, верните количество запросов, которые случились в диапазоне ```[t-3000, t]```.

**Гарантируется**, что каждый вызов ```ping``` использует исключительно большее значение ```t```, чем предыдущий вызов.
*/
class RecentCounter{
    constructor(){
        this.stack = [];
        this.start = 0;
    }
    ping(t){
        this.stack.push(t);
        while(this.stack[this.start] < t - 3000){
            this.start++;
        }
        return this.stack.length - this.start;
    }
}

let recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3