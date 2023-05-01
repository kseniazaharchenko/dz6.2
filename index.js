let sports = ['football', 'basketball', 'tennis'];
let champions = [
  ['Lionel', 'Messi'],
  ['LeBron', 'James'],
  ['Serena', 'Williams']
];

let sport = prompt('Choose a sport: football, basketball or tennis');
if (sport) {
  sport = sport.toLowerCase();
  if (sports.includes(sport)) {
    let index = sports.indexOf(sport);
    let champion = champions[index];
    alert(`Cool! Do you want to become ${champion[0]} ${champion[1]}?`);
  } else {
    alert('Invalid input');
  }
} else {
  alert('Sorry that you did not want to enter your information');
}