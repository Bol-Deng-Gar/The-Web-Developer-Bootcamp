// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0,5")
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0,5")
//     console.log(random);
// }

// const dayOfWeek = "Saturday";
// if (dayOfWeek === "Monday") {
//     console.log("EVERYDAY IS A MONDAY")
// } else if (dayOfWeek === "Saturday") {
//     console.log("I LOVE SATURDAY, THE COMPETITION IS RELAXING")
// }


// const age = 23;

// if (age < 30) {
//     console.log("Focus on learning as many skills as possible")
// }
// else if (age < 40) {
//     console.log("Focus on earning money using your skills")
// }
// else if (age < 50) {
//     console.log("Focus on spending time with family")
// }
// else {
//     console.log("Give Up Old MOFO")
// }

// for (let i = 1; 1 <= 10; i++) {
//     console.log("The Almanack of Naval Ravikant")
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// let num = 0;
// while (num < 5) {
//     num++;
//     console.log(num);
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     if (guess === "q") break;
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = (prompt("Enter your first guess! (Type q to quite the game)"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === "q") break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("To low! Enter new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or a 'q' to quit");
//     }
// }

// if (guess === "q") {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

// function psychOfMoney() {
//     console.log("How you behave");
//     console.log("determines how well");
//     console.log("you handle your money.");
// }

// psychOfMoney()


// function welcome(firstName) {
//     console.log(`Welcome to my store ${firstName}`)
// }

const philosophicalSchool = {
    name: "Platonism",
    founder: "Plato",
    founded: "4th century BCE",
    keyTeaching() {
        console.log(`${this.founder} taught that the existence of abstract forms or ideas are the true reality.`);
    }
}

