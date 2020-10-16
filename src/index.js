module.exports = function reverse (n) {
    let array = Array.from(String(n))
    return array[0] === '-' 
          ? Number(array.splice(1, array.length).reverse().join(''))
          : Number(array.reverse().join(''))
  }
