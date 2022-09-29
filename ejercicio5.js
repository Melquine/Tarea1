const orden = (arr) => {
    let newArr = arr.sort(function(a, b) {
        return a - b
    })
    return newArr
}

let numbers = [2, 10, 3, 8, 5, 9, 7, 4, 6, 1]

console.log(orden(numbers))