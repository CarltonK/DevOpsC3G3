// Literal notation
const team = {
    name: 'Manchester United',
    'position': 3,
    'stadium': 'Old Trafford',
    players: ['David', 'Bruno'],
    trainingSchedule: {
        'mon': 'Running',
        'tue': 'Cycling',
        'wed': 'Ball possession',
    }
};

// Retrieve values
// Method 1 -> Dot notation
// console.log(team.trainingSchedule.mon)
// Method 2 -> Literal
// console.log(team['position'])
// Method 3
const allValues = Object.values(team)
// console.log('Values', allValues)

const allKeys = Object.keys(team);
// console.log('Keys', allKeys)

// Add items to an object
// Method 1 - Dot Notation
team.stadiumCapacity = 70000;
// console.log(team)
// Method 2 - Literal notation
team['captain'] = 'Harry Maguire';
// console.log(team)
team.trainingSchedule.thur = 'Rest day';
console.log(team)


// Functional Notation or the use of Constructors
function Team(name, position, stadium, trainingSchedule) {
    this.name = name;
    this.position = position;
    this.stadium = stadium;
    this.trainingSchedule = trainingSchedule;
}

const arsenal = new Team('Arsenal', 1, 'Emirates');
const chelsea = new Team('Chelsea', 10, 'Stamford Bridge');
// console.log(arsenal)