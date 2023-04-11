function fibonacciSeries (num) {
let series = []

if (num > 0 ){
    series.push(0)
}

if (num > 1 ) {
    series.push(1)
}

for (let i = 0; i <num-2; i++){
    series.push(series[i]+series[i+1])
}
return console.log(series)
}

fibonacciSeries(10)