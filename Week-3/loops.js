/*
 * Array Looping 
 */
const fruitsArray = ['Mango', 'Apple', 'Banana', 'Grapes', 'Watermelon'];
// fruitsArray[0]

// Method 1
fruitsArray.forEach(function (value) {
    if (value == 'Mango') {
        console.log('I love eating a', value);
    } else {
        console.log('This is a', value);
    }
})

// Method 2
fruitsArray.map(function (value) {
    if (value == 'Mango') {
        console.log('I love eating a', value);
    } else {
        console.log('This is a', value);
    }
})

// Method 3
for (let index = 0; index < fruitsArray.length; index++) {
    const element = fruitsArray[index];
    console.log('This is a', element, 'which is index', index);
}

/*
 * Object Looping 
 */
const employeeObject = { 'name': 'John Doe', 'department': 'Sales', 'joinedOn': '2020-03-01', 'empNumber': 'A122B0' };
// employeeObject['name']
for (const key in employeeObject) {
    const value = employeeObject[key]
    console.log(key,'->',value)
}

/*
 * Building a Deck of Cards 
 */

const faces = ['Hearts', 'Spades', 'Diamonds', 'Flowers'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const jokers = ['JOKER', 'JOKER'];

const deck = [];
for (let index = 0; index < faces.length; index++) {
    const element = faces[index];

    for (let i = 0; i < values.length; i++) {
        const val = values[i];
        deck.push(val, 'of', element)
    }
}

jokers.map(function (value) { deck.push(value) })

console.log(deck)
