/* Challenge 7: OR short-circuiting */
/* You can create a condition in the value assignment of a variable; if the value to assign doesn't exist, or is falsy, you can put another value to assign for that case. */
console.log('Challenge 7')

const jobHunter = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }
    
/*
1. Make it so that if the jobHunter object does not have 
   a name property, the username is used instead.
*/
    
// Complete this line of code 👇
const jobHunterName = jobHunter.name || jobHunter.username

console.log(`Hey ${jobHunterName}!`)

/* Challenge 8: AND short-circuiting */
/* And short way to write if simple blocks. If the first block of &&(AND) is true, you run the second block */
console.log('Challenge 8')

const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234,5678,9876,3434]

function authenticationCheck(passCode){
/*
Challenge:
1. If the passcode passed into authenticationCheck 
   exists in swissBankPassCodesArr, authenticationCheck 
   should log out accountBalanceUsd. 
   
   If the passcode does not exist in swissBankPassCodesArr 
   then authenticationCheck need not do anything.
   
⚠️ Make sure you short-circuit with &&
   hint.md for help!
*/
    swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd)
}

authenticationCheck(3434)