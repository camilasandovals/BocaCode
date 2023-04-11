function fibonacciSeries (num) {
let series = [0, 1]

for (let i = 0; i <num; i++){
    series.push(series[i]+series[i+1])
}
return console.log(series)
}

fibonacciSeries(8)