var numbers = [5, 7, 1, 8, 9]

numbers.sort(sortFunction);

console.log(numbers)

function sortFunction (a, b) {
  return (b - a)
}
