const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAtleastOneAdult = people.some((person) => {
  const currentYear = (new Date()).getFullYear();
  return (currentYear - person.year >= 19);
});
const someElement = document.querySelector('.array-some');
someElement.innerHTML = `Result: <b>${isAtleastOneAdult}</b>`;
// Array.prototype.every() // is everyone 19 or older?
const isAllAdult = people.every((person) => {
  const currentYear = (new Date()).getFullYear();
  return (currentYear - person.year >= 19);
});
const everyElement = document.querySelector('.array-every');
everyElement.innerHTML = `Result: <b>${isAllAdult}</b>`;

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((comment) => {
  return (comment.id === 823423);
});
const findElement = document.querySelector('.array-find');
findElement.innerHTML = `Result: <b>${comment.id}, ${comment.text}</b>`;

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => {
  return (comment.id === 823423);
});
const indexElement = document.querySelector('.array-find-index');
indexElement.innerHTML = `Result: <b>${index}</b>`;

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];