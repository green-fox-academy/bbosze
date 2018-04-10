// Create a prison function, that has your name as a private fugutive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable



function prison(name) {
  if (name === undefined) {
    name = 'Balázs'
  }
  let visitCount = 0;
  let isEscaped = false;
  return {
    visit: () => {
      !isEscaped ? (visitCount++, console.log(`${name} is visited ${visitCount} times(s).`))
      : console.log('Nobody is here.');
    },
    escape: () => {
      isEscaped = true;
      console.log(`BREAKING NEWS, ${name} escaped the prison`);
    }
  }
}


const alcatraz = prison();

alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore

const alcatraz2 = prison('Sad Panda');

alcatraz2.visit(); // Sad Panda is visited 1 time(s)
alcatraz2.visit(); // Sad Panda is visited 2 time(s)
alcatraz2.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz2.visit(); // Nobody is here anymore
