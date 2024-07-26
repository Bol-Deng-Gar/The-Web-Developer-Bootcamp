// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("Your fake data here");
//       }
//       reject("Request Error!");
//     }, 1000)
//   })
// }

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("DONE WITH REQUEST!")
//     console.log("Data is:", data)
//   })
//   .catch((err) => {
//     console.log("Something went wrong!")
//   })


// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay)
// }

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000, () => {
//         delayedColorChange("blue", 1000, () => {
//           delayedColorChange("indigo", 1000, () => {
//             delayedColorChange("violet", 1000, () => {

//             })
//           })
//         })
//       })
//     })
//   })
// })

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  })
}

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000))

async function rainbow() {
  await delayedColorChange("red", 1000)
  await delayedColorChange("orange", 1000)
  await delayedColorChange("yellow", 1000)
  await delayedColorChange("green", 1000)
  await delayedColorChange("blue", 1000)
  await delayedColorChange("indigo", 1000)
  await delayedColorChange("violet", 1000)
}

// async function hello() {

// }

// const sing = async () => {
//   return "LA LA LA LA "
// }

// sing()
//   .then((data) => {
//     console.log("Promise resolved with:", data)
//   })
//   .catch(err => {
//     console.log("Error")
//     console.log(err)
//   })

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentials"
//   if (password === "apple") return "Welscome!"
//   throw "Invalid Password"
// }

// login("username", "orange")
//   .then(msg => {
//     console.log("Logged In")
//     console.log(msg)
//   })
//   .catch(err => {
//     console.log("ERROR!")
//     console.log(err)
//   })