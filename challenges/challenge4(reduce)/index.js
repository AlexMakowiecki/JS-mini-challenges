import { itemsBoughtArr } from "./itemsBoughtArr.js"

/* Challenge #4: Array.reduce() */
/* Iterate an array, carrying a total over each iteration, and it return that total in the end.
By default, the first value of total is the first element, you can pass a second parameter if you want to assign the first value of total */

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]
const totalGrades = grades.reduce((total, currentGrade) => total + currentGrade)

console.log(`The class average is ${totalGrades/grades.length}`)

/* Array.reduce in Objects */

function calculateTotalCost(itemsBoughtArr){
  /*
  Challenge:
  1. Use the reduce method to calculate the total 
     cost of items which have been bought.
  */
      const total = itemsBoughtArr.reduce( (total, item) => (total + item.priceUSD), 0)
      return total
  }
  
  console.log(calculateTotalCost(itemsBoughtArr))