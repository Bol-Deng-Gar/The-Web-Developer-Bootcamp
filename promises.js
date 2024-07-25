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


const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay)
}

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000, () => {
          delayedColorChange("indigo", 1000, () => {
            delayedColorChange("violet", 1000, () => {

            })
          })
        })
      })
    })
  })
})