const fib = num => {
    if( !num || typeof num !== 'number' || num === 0 ) return null
    else {
        if(num === 1) return [0]
        const arr = [ 0, 1 ]
        for( i=1; i<=num-2; i++ ) arr.push(arr[i]+arr[i-1])
        return arr
    }
}
module.exports = fib