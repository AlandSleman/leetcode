function createCounter(n: number): any {
    let count=n;
    return function() {
return count++
    }
}
