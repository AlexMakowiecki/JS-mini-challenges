/* #Challenge 5: Rest parameter
If you dont know the quantity of arguments you receive, you can use a rest parameter and all of the arguments will be stored in an array with the name of the rest parameter. Others parameters have to be before the rest parameter
*/

function getLabelsHtml(text, sender, ...persons) {
    const labelsContainerEl = document.getElementById('labels-container')
    return persons.reduce(( labelInnerHTML, person ) => {
        return `
            ${ labelInnerHTML }
            <div class="label-card">
                <p>Dear ${ person.name} </p>
                <p>${text}</p>
                <p>Best wishes,</p>
                <p>${sender}</p>
            </div>`
    }, '')
/*
Challenge:
1. Add parameters.
2. Update the HTML template where you 
   see **NAME**.
3. Return HTML template for each label.
*/

// `<div class="label-card">
//     <p>Dear **NAME** </p>
//     <p>${text}</p>
//     <p>Best wishes,</p>
//     <p>${sender}</p>
// </div>`
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'}
    ) 

