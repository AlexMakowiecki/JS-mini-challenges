/* Challenge #1: Object Destructuring */
/* To declare variables (with the same name as the property) for any property inside an object, in a more DRYer way. */

function challenge1(){
  const dreamHoliday = {
    destination: 'a big house',
    activity: 'relax and enjoy the house facilities',
    companion: 'my friends'
  }

  const { destination, activity, accomodation, companion } = dreamHoliday
  console.log(` I would love to stay in ${ destination }. I'd ${ activity } with ${ companion }`)
}