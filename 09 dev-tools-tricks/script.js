const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("Hi, I'm a %s string", "console");

// Styled
console.log("%c I'm a great text!", "font-size: 50px")

// warning!
console.warn("It's a warning");

// Error :|
console.error("It's an error");

// Info
console.info("I'm an info");

// Testing
console.assert(1 === 2, "That's wrong");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);
console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`${dog.name}`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('JS');
console.count('JS');
console.count('JS');
console.count('js');

// timing
console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

console.table(dogs);