/* Challenge 9: Constructor using functions */
/* A constructor allow you to create a scheme of an object to later create multiple unique variables, but with the same properties and methods */
/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
  - 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

function Character(name) {
  this.name = name
  this.collectedItemsArray = []
  this.addItem = function (item) {
    this.collectedItemsArray.push(item)
    console.log(`${this.name} now has: ${this.collectedItemsArray.join(`, `)}`)
  }
}

const merlin = new Character('Merlin')
merlin.addItem('wand')
merlin.addItem('map')
merlin.addItem('potion')
const arthur = new Character('Arthur')
arthur.addItem('sword')
arthur.addItem('stone')
arthur.addItem('bread')


/* Challenge 10: Constructor using class syntax */
/* The same logic but with other syntax, similar to Java */

class CharacterClass {
  constructor(name) {
    this.name = name
    this.collectedItemsArr = []
  }

  addItem(item) {
    this.collectedItemsArr.push(item)
    console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
  }
}

const merlinClass = new CharacterClass('Merlin')
merlinClass.addItem('wand')
merlinClass.addItem('map')
merlinClass.addItem('potion')
const arthurClass = new CharacterClass('Arthur')
arthurClass.addItem('sword')
arthurClass.addItem('stone')
arthurClass.addItem('bread')