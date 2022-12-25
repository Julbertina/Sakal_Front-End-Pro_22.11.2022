const yearOfBirth = +prompt('Enter your year of birth');
const city = prompt('Enter your city of residence');
const sport = prompt('What is your favourite sport');
const age = 2022 - yearOfBirth;
let messageAge;
let messageCity;
let messageSport;

if (age === 2022) {
  messageAge = ('It\'s a pity that you didn\'t want to enter your age');
} else if (age < 0 || age > 100) {
  messageAge = ('Your age is undefined');
} else {
  messageAge = (`You are ${age} years old`);
}

switch (city) {
  case 'London':
    messageCity = ('You live in the capital of Great Britain');
    break;
  case 'Washington':
    messageCity = ('You live in the capital of the USA');
    break;
  case 'Kyiv':
    messageCity = ('You live in the capital of Ukraine');
    break;
  case '':
  case null:
    messageCity = ('It\'s a pity that you didn\'t want to enter your city of residence');
    break;
  default:
    messageCity = (`You live in ${city}`);
}

switch (sport) {
  case 'football':
    messageSport = ('Cool! Do you want to become the new Messi?');
    break;
  case 'basketball':
    messageSport = ('Cool! Do you want to become the new Kobe Bryant?');
    break;
  case 'golf':
    messageSport = ('Cool! Do you want to become the new Tiger Woods?');
    break;
  case '':
  case null:
    messageSport = ('It\'s a pity that you didn\'t want to enter your favourite sport');
    break;
  default:
    messageSport = (`Cool! you like ${sport}`);
}

alert(`${messageAge} \n${messageCity} \n${messageSport}`);
